import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

let cat = ['Software', 'Technology','Reviews', 'About']

export default function Home() {
  return (
    <Layout categories={cat}>
      <div>bhai</div>
    </Layout>
  );
}
