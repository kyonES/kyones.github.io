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
      </Head>
      <h2 className="heading01">ねこまたの日記</h2>{" "}
      <img src="images/icon.jpg" height="200px"></img>
      <h2>
        <FontAwesomeIcon icon={faPaw} size="xs" />
        Links
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
          <a href="https://mstdn.kgtkr.net/@nekomata#">
            {" "}
            <img src="/images/logo-purple.svg" height="50px"></img>
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
        <FontAwesomeIcon icon={faPaw} size="xs" />
        Posts
      </h2>
      <ul>
        <li>
          {
            // リンクは上に追加する
          }
          <h3>
            <Link href="/posts/2022-05-03">
              2022/05/03 JSON Parserを作ってみた
            </Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/posts/2022-04-06">2022/04/06 初めての投稿</Link>
          </h3>
        </li>
      </ul>
      <button
        onClick={() => {
          var arr = ["a", "b", "c", "d"];
          var chr = arr[Math.floor(Math.random() * arr.length)];
          var min = 1;
          var max = 261;
          var ran = Math.floor(Math.random() * (max + 1 - min)) + min;
          var num = ("0" + ran).slice(-3);
          var newurl =
            "https://abc" +
            num +
            ".contest.atcoder.jp/tasks/abc" +
            num +
            "_" +
            chr;
          window.open(newurl, "_blank");
        }}
      >
        本日のAtCoder
      </button>
    </div>
  );
}
