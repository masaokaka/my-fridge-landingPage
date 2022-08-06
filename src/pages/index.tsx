import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const Top: NextPage = () => (
  <div>
    <Head>
      <title>MyFridge</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <main>
        <Link href="/about" passHref>
          <button type="button">サービスについてだよ</button>
        </Link>
      </main>
    </Layout>
  </div>
);

export default Top;
