import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { Circles } from 'react-loader-spinner';
import { useState } from 'react';
import Layout from './components/layout/Layout';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Activate loading when route is changed
  Router.events.on('routeChangeStart', () => {
    setIsLoading(true);
  });

  // Deactivate loader when route change is completed
  Router.events.on('routeChangeComplete', () => {
    setIsLoading(false);
  });

  return (
    <Layout>
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          <Circles color="#132F4C" height={40} width={40} />
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </Layout>
  );
}

export default MyApp;
