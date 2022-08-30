import type { NextPage } from 'next';
import { git } from '@/utils/git';
import { useXarrow, Xwrapper } from 'react-xarrows';
import { useEffect, useRef, useState } from 'react';
import Xarrow from 'react-xarrows';
import Button from '@/components/Button';
import styles from '@/styles/sandbox.module.css';

/**
 * Sandbox component
 * @return {JSX.Element} - The JSX code for Sandbox component
 */
const Sandbox: NextPage = (): JSX.Element => {
  const lineColors = ['#011627', '#2EC4B6', '#E71D36', '#FF9F1C'];
  const updateXarrow = useXarrow();
  const [reRender, setRerender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateXarrow();
    setRerender(false);
  }, [reRender]);

  useEffect(() => {
    const container = containerRef?.current;
    const handleScroll = () => updateXarrow();
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    return git.tree.branches.map((b, index) => {
      let commits = git.backTrackCommits(b.target).reverse();
      let commonCommits = git
        .getMainCommits()
        .filter((c) => commits.includes(c));

      const visibleCommits = commits.filter(
        (c) => !commonCommits.includes(c) || index == 0,
      );

      return (
        <div className={`${styles.branch} box-green px-3`} id={b.id} key={b.id}>
          <div
            onClick={() => {
              setRerender(true);
              git.checkout(b.id);
            }}
            className={styles.branchName}
          >
            {b.id}
          </div>
          <div className={`${styles.commitContainer} px-3`}>
            {git.tree.commits.map((c) => {
              if (
                (git.getMainCommits().includes(c) &&
                  index != 0 &&
                  commits.includes(c)) ||
                (index != 0 && commonCommits.includes(c))
              ) {
                return (
                  <div
                    className={`${styles.commit} ${styles.faded} box-red`}
                    key={c.id}
                  >
                    {c.id}
                  </div>
                );
              }
            })}{' '}
            {visibleCommits.map((c) => {
              return (
                <div
                  id={c.id}
                  className={`${styles.commit} box-purple`}
                  key={c.id}
                  onClick={() => {
                    setRerender(true);
                    git.checkout(c.id);
                  }}
                >
                  {c.id}
                  {c.parents &&
                    c.parents.map((p) => {
                      return (
                        <Xarrow
                          start={c.id}
                          end={p}
                          key={p}
                          color={lineColors[index]}
                        />
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-5 box-blue py-3 px-5 mb-10">
        <Button
          onClick={() => {
            git.resetTree();
            setRerender(true);
          }}
        >
          Refresh
        </Button>
        <Button
          onClick={() => {
            setRerender(true);
            git.commit();
          }}
        >
          Commit
        </Button>
        <Button
          onClick={() => {
            setRerender(true);
            git.branch();
          }}
        >
          Branch
        </Button>
        <Button
          onClick={() => {
            setRerender(true);
            git.merge();
          }}
        >
          Merge
        </Button>
        <Button
          onClick={() => {
            setRerender(true);
            git.rebase();
          }}
        >
          Rebase
        </Button>
      </div>
      <div
        className="flex flex-col justify-center items-center w-full pl-16 overflow-x-auto box-gray py-3 px-5"
        ref={containerRef}
      >
        <Xwrapper>
          <div className={styles.pointerContainer}>
            <div className={styles.commit} id={git.tree.HEAD.id}>
              HEAD{' '}
              <Xarrow
                start={git.tree.HEAD.id}
                end={git.tree.HEAD.target}
                key={git.tree.HEAD.id}
              />
            </div>
            <div className={styles.branchContainer}>{renderContent()}</div>
          </div>
        </Xwrapper>
      </div>
    </div>
  );
};

export default Sandbox;
