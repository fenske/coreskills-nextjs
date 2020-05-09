import '../styles/index.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(
    <div>
      <Head>
        <title>{ Component.title }</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
