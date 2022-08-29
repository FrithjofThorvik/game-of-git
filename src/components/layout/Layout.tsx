import type { FC } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar';
import CharacterSidebar from './CharacterSidebar';
import useProtectedRoutes from '@/hooks/useProtectedRoutes';

interface LayoutProps {
  children: JSX.Element;
}

/**
 * Layout component
 * @return {JSX.Element} - The JSX code for Layout component
 */
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  useProtectedRoutes();

  return (
    <>
      <Head>
        <title>Game of Git</title>
        <meta name="GameOfGit" content="Game of Git" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-screen w-screen">
        <Sidebar />
        <CharacterSidebar />
        <div className="absolute top-0 bottom-0 flex flex-col w-full overflow-y-auto px-[16rem] py-10 bg-dark-blue">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
