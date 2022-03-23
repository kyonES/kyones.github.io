import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ねこまたのページ</title>
        <meta name="description" content="現在設定中" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      ねこです。にゃーん。
    </div>
  );
}
