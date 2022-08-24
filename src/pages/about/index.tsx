import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const About: NextPage = () => (
  <div>
    <Head>
      <title key="title">サービスについて | MyFridge</title>
      <meta
        key="description"
        name="description"
        content="Generated by create next app"
      />
    </Head>
    <Layout>
      <main>
        <h1>このサイトについて</h1>
        <Link href="/">
          <p>トップページに戻る</p>
        </Link>
      </main>
    </Layout>
  </div>
);

export default About;
