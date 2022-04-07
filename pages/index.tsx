import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ねこまたの日記</title>
        <meta
          name="description"
          content="ねこまたです。よろしくおねがいします。"
        />
        <link rel="icon" href="/images/icon.jpg" />
      </Head>
      <h1>ねこまたの日記 </h1>
      <img src="/images/icon.jpg" height="200px"></img>
      <h2>自己紹介</h2>
      ねこまたです。よろしくおねがいします。大学での主専攻である地球科学(物理)を勉強する傍、ゆるくPython、JavaScript、Haskellなどを触っています。
      このサイトでは技術記事の他、趣味のアフタヌーンティー、カフェ巡りの記録を書き連ねていこうと思っています。
      にゃーん。
      <h2>リンク</h2>
      <li>
        {" "}
        <a href="https://github.com/kyonES">github</a>
      </li>
      <li>
        {" "}
        <a href="https://twitter.com/what_is_pyoni">Twitter</a>
      </li>
      <li>
        {" "}
        <a href="https://www.instagram.com/sub_neko">Instagram</a>
      </li>
      <h2>投稿一覧</h2>
      <ul>
        <li>
          {
            // リンクは上に追加する
          }
          <Link href="/posts/2022-04-06">2022/04/06 初めての投稿 </Link>
        </li>
      </ul>
    </div>
  );
}
