import { defaultGitTree } from '@/assets/mocks/defaultGitTree';
import { Branch, Commit, GitTree } from '@/types/interfaces';

const copyObjectWithoutRef = (obj: any): any => {
  return JSON.parse(JSON.stringify(obj));
};

class Git {
  public tree: GitTree;

  constructor(tree: GitTree) {
    this.tree = copyObjectWithoutRef(tree);
  }

  public commit(): void {
    const currentCommit = this.getHeadCommit();
    const newCommitId = 'C' + this.tree.commits.length;
    if (!currentCommit) return;

    this.tree.commits.push({
      parents: [currentCommit.id],
      id: newCommitId,
    });

    this.moveHead(newCommitId);
  }

  public mergeCommit(currentBranch: Branch, targetBranch: Branch): void {
    const currentCommit = this.tree.commits.find(
      (c) => c.id === currentBranch.target,
    );
    const targetCommit = this.tree.commits.find(
      (c) => c.id === targetBranch.target,
    );
    const newCommitId = 'C' + this.tree.commits.length;
    if (!currentCommit || !targetCommit) return;

    this.tree.commits.push({
      parents: [currentCommit.id, targetCommit.id],
      id: newCommitId,
    });

    currentBranch.target = newCommitId;
    this.checkout(currentBranch.id);
  }

  public branch(): void {
    const headCommitId = this.getHeadCommit()?.id;
    if (!headCommitId) return;

    this.tree.branches.push({
      id: 'main' + this.tree.branches.length,
      target: headCommitId,
    });
  }

  public checkout(targetId: string): void {
    this.tree.HEAD.target = targetId;
  }

  public rebase(): void {
    let current = this.tree.branches[0];
    let target = this.tree.branches[1];
    const currentCommits = this.backTrackCommits(current.target);
    const targetCommits = this.backTrackCommits(target.target);
    const currentExlusiveCommits = currentCommits.filter(
      (c) => !targetCommits.includes(c),
    );

    let rebaseCommits: Commit[] = [];
    currentExlusiveCommits.forEach((c: Commit, index: number) => {
      let parents: string[] = [];
      if (index === currentExlusiveCommits.length) {
        parents = c.parents;
      } else {
        const temp = c.parents;
        parents = temp.map((p) => p + "'");
      }
      rebaseCommits.push({
        ...c,
        parents: parents,
        id: c.id + "'",
      });
    });
    rebaseCommits.forEach((c) => this.tree.commits.push(c));
    rebaseCommits[rebaseCommits.length - 1].parents = [targetCommits[0].id];
    console.log(rebaseCommits);

    current.target = rebaseCommits[0].id;
  }

  public resetTree(): void {
    this.tree = copyObjectWithoutRef(defaultGitTree);
  }

  public merge(): void {
    let current = this.tree.branches[0];
    let target = this.tree.branches[1];
    const currentCommits = this.backTrackCommits(current.target);
    const targetCommits = this.backTrackCommits(target.target);
    const noChanges = targetCommits.every(function (val) {
      return currentCommits.indexOf(val) >= 0;
    });
    const canFastForward = currentCommits.every(function (val) {
      return targetCommits.indexOf(val) >= 0;
    });
    if (noChanges) {
      alert('noChanges');
    } else if (canFastForward) {
      alert('fastForward');
      current.target = target.target;
    } else {
      alert('mergeCommit');
      this.mergeCommit(current, target);
    }
  }

  public getHeadCommit(): Commit | undefined {
    let targetCommit = this.tree.commits.find(
      (c) => c.id === this.tree.HEAD.target,
    );
    if (targetCommit) return targetCommit;

    const targetBranch = this.tree.branches.find(
      (b) => b.id === this.tree.HEAD.target,
    );
    if (!targetBranch) return undefined;

    targetCommit = this.tree.commits.find((c) => c.id === targetBranch.target);
    return targetCommit;
  }

  public moveHead(targetId: string): void {
    const targetCommit = this.tree.commits.find(
      (c) => c.id === this.tree.HEAD.target,
    );
    if (targetCommit) this.tree.HEAD.target = targetId;

    const targetBranch = this.tree.branches.find(
      (b) => b.id === this.tree.HEAD.target,
    );
    if (!targetBranch) return;

    targetBranch.target = targetId;
  }

  public getMainCommits(): Commit[] {
    return this.backTrackCommits(this.tree.branches[0].target);
  }

  public backTrackCommits(targetId: string): Commit[] {
    let commits = [];
    let node: Commit | undefined = this.tree.commits.find(
      (c) => c.id === targetId,
    );

    while (node) {
      commits.push(node);
      node = this.tree.commits.find((c) => c.id === node?.parents[0]);
    }
    return commits;
  }
}

export const git = new Git(defaultGitTree);
