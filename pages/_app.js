import "../styles/style.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jordan Ricaut - Développeur web frontend freelance</title>
        <meta
          name="description"
          content="Jordan Ricaut - Développeur web frontend freelance sur la région de Vannes "
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
