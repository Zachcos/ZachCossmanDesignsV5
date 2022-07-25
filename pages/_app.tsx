import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <html lang='en' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='description'
          content='Zach Cossman Designs - Custom performant websites'
        />
        <title>Zach Cossman Designs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
