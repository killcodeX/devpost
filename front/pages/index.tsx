import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout categories={[1,2,3,4,5]}>
      <div className={styles.container}>bhai</div>
    </Layout>
  );
}
