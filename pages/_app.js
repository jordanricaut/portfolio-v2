import "../styles/style.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jordan Ricaut - Développeur web frontend freelance</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
