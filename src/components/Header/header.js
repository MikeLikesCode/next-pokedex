import Head from "next/head";
import styles from "./header.module.css";

export default function Header({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <img src="/logo.png" alt="logo" />
      </div>
    </div>
  );
}
