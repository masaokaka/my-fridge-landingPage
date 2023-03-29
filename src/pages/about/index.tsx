import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ScrollTopButton from '../../components/uiParts/ScrollTopButton';

const About: NextPage = () => (
  <>
    <Head>
      <title key='title'>サービスについて | MyFridge</title>
      <meta
        key='description'
        name='description'
        content='Generated by create next app'
      />
    </Head>
    <div className='pt-28'>
      {/* タイトル */}
      <h1 className='mb-16 py-2 px-2 text-left text-3xl font-bold text-custom-black md:px-[32px] md:text-5xl'>
        サービスについて
      </h1>

      {/* 1段目 */}
      <div className='w-full md:mb-16 md:flex'>
        {/* 文章側 */}
        <div className='flex w-full items-center justify-center rounded-r-[150px] bg-custom-accent'>
          <div>
            <div className='px-28 pt-10 pb-10 text-center text-3xl font-bold text-white'>
              こんな時ありませんか？
            </div>
            <div className='px-28 pb-10 text-left text-3xl text-white'>
              冷蔵庫に何があるか把握できていない！
              <br />
              冷蔵庫の余っている食材を使いたい！
              <br />
              冷蔵庫の整理整頓ができていない！
            </div>
          </div>
        </div>

        {/* 画像側 */}
        <div className='w-full'>
          <div className='flex h-full items-center justify-center'>
            <div className=''>
              <Image
                src='/img/lettuse.png'
                alt='レタス'
                width={400}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2段目 */}
      <div className='w-full text-right md:mb-16 md:flex md:justify-end'>
        {/* 文章側 */}
        <div className='flex w-full items-center justify-center rounded-l-[150px] bg-custom-accent md:order-2'>
          <div>
            <div className='px-28 pt-10 pb-10 text-center text-3xl font-bold text-white'>
              機能について
            </div>
            <div className='px-28 pb-10 text-left text-3xl text-white'>
              ・冷蔵庫内の管理：食材や飲み物の名前、数量、消費期限などを入力し、冷蔵庫内の在庫を管理できます。
              <br />
              ・賞味期限アラート機能：設定した賞味期限が近づくと、通知が送られるので、食材の無駄を防止できます。
              <br />
              ・家族と共有可能：家族全員が同じアプリを使用すれば、家族で共有している冷蔵庫の在庫を共有できます。
            </div>
          </div>
        </div>

        {/* 画像側 */}
        <div className='w-full md:order-1'>
          <div className='flex h-full items-center justify-center'>
            <div className=''>
              <Image
                src='/img/carrot.png'
                alt='にんじん'
                width={400}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3段目 */}
      <div className='w-full md:mb-16 md:flex'>
        {/* 文章側 */}
        <div className='flex w-full items-center justify-center rounded-r-[150px] bg-custom-accent'>
          <div>
            <div className='px-28 pt-10 pb-10 text-center text-3xl font-bold text-white'>
              開発者について
            </div>
            <div className='px-28 pb-10 text-left text-3xl text-white'>
              MM(フロントエンド/バックエンド)
              <br />
              DK(フロントエンド/バックエンド)
            </div>
          </div>
        </div>

        {/* 画像側 */}
        <div className='w-full'>
          <div className='flex h-full items-center justify-center'>
            <div className=''>
              <Image
                src='/img/chineseLettuse.png'
                alt='チャイニーズレタス'
                width={400}
                height={400}
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollTopButton />
    </div>
  </>
);

export default About;
