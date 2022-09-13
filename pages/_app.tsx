import "../styles/globals.css";
import "../styles/Loading.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Richard.</title>
        <link rel='icon' type="image/x-icon" href='/King.svg' />
        <meta name='description' content='Portfolio' />
				<meta name="keywords" content="richard, web developer, designer" />
				<meta name="author" content="R.G" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
