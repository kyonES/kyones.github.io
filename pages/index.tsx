import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ねこまたの日記</title>
        <meta name="description" content="現在設定中" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>ねこまたの日記 </h1>
      <h2>自己紹介</h2>
      ねこです。にゃーん。
      <h2>投稿一覧</h2>
      <ul>
        <li>
          <Link href="/posts/test"> test </Link>
        </li>
      </ul>
    </div>
  );
}
