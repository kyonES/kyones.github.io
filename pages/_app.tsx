import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import Link from "next/link";
config.autoAddCss = false;
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      {router.pathname !== "/" ? (
        <Link href="/">トップページに戻る(=^･ω･^=) </Link>
      ) : null}
    </>
  );
}
export default MyApp;
