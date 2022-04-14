import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPaw } from "@fortawesome/free-solid-svg-icons";

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
      <h1>
        <FontAwesomeIcon icon={faPaw} size="xs" color="rgb(245, 109, 145)" />
        ねこまたの日記{" "}
      </h1>
      <img src="/images/icon.jpg" height="200px"></img>
      <h2>
        {" "}
        <FontAwesomeIcon icon={faPaw} size="xs" />
        自己紹介
      </h2>
      ねこまたです。よろしくおねがいします。大学での主専攻である地球科学(物理)を勉強する傍、ゆるくPython、JavaScript、Haskellなどを触っています。
      このサイトでは技術記事の他、趣味のアフタヌーンティー、カフェ巡りの記録を書き連ねていこうと思っています。
      にゃーん。
      <h2>
        {" "}
        <FontAwesomeIcon icon={faPaw} size="xs" />
        リンク
      </h2>
      <ul className="sample">
        <li>
          {" "}
          <a href="https://github.com/kyonES">
            <img src="/images/GitHub-Mark-120px-plus.png" height="50px"></img>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://twitter.com/what_is_pyoni">
            {" "}
            <img src="/images/2021 Twitter logo - blue.png" height="50px"></img>
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.instagram.com/sub_neko">
            <img
              src="/images/Instagram_Glyph_Gradient_RGB.png"
              height="50px"
            ></img>
          </a>
        </li>
      </ul>
      <h2>
        {" "}
        <FontAwesomeIcon icon={faPaw} size="xs" />
        投稿一覧
      </h2>
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
