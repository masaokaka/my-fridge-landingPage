import { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/uiParts/Button';

/** 404ページ */
const NotFoundPage: NextPage = () => (
  <>
    {/* ヘッダ情報 */}
    <Head>
      <title key='title'>ページが見つかりませんでした | MyFridge</title>
      <meta
        key='description'
        name='description'
        content='ページが見つかりませんでした'
      />
    </Head>
    <div className='flex h-[calc(100vh_-_127px)]  flex-col items-center justify-center'>
      <p className='mb-4 text-8xl text-custom-black'>404</p>
      <p className='mb-6 text-3xl text-custom-black'>
        ページが見つかりませんでした。
      </p>
      <Button link='/' buttonColor='bg-custom-accent'>
        トップに戻る
      </Button>
    </div>
  </>
);

export default NotFoundPage;
