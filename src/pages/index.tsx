import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Top: NextPage = () => (
  <div>
    <Head>
      <title key="title">
        冷蔵庫にある食品を簡単に管理できるアプリ！ | MyFridge
      </title>
      <meta
        key="description"
        name="description"
        content="冷蔵庫にある食品を簡単に管理できるアプリです。登録も簡単！"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Link href="/about" passHref>
        <button type="button">サービスについて</button>
      </Link>
    </main>
  </div>
);

export default Top;
