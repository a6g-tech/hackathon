import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>w3meta</title>
        <meta name="description" content="web3 citizen meta profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
    </div>
  );
}
