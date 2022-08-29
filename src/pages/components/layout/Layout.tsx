import Head from 'next/head';
import type { FC } from 'react';
import CharacterSidebar from './CharacterSidebar';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: JSX.Element;
}

/**
 * Layout component
 * @return {JSX.Element} - The JSX code for Layout component
 */
const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Design</title>
        <meta name="design" content="Design project" />
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
