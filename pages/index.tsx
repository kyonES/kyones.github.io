import Head from "next/head";
import Link from "next/link";
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
      <h2>投稿一覧</h2>
      <ul>
        <li>
          <Link href="/posts/test"> test </Link>
        </li>
      </ul>
    </div>
  );
}
