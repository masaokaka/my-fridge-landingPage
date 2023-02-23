import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Button from '../components/uiParts/Button';
import ScrollTopButton from '../components/uiParts/ScrollTopButton';

const Top: NextPage = () => (
  <>
    {/* ヘッダ情報 */}
    <Head>
      <title key='title'>
        冷蔵庫にある食品を簡単に管理できるアプリ！ | MyFridge
      </title>
      <meta
        key='description'
        name='description'
        content='冷蔵庫にある食品を簡単に管理できるアプリです。登録も簡単！'
      />
    </Head>
    {/* トップページ内コンテンツ */}
    <main className='container mx-auto min-w-[768px] max-w-[1960px]'>
      <div className='relative h-screen max-h-[1080px] min-h-[600px] w-full'>
        {/* トップページ一段目 */}
        <Image
          src='/img/topImage.svg'
          alt='トップ画像'
          layout='fill'
          objectFit='cover'
          className='h-full w-full blur-sm'
        />
        <div className='z-1 absolute flex h-full w-full items-center justify-center'>
          <h1 className='text-6xl font-semibold leading-snug text-white'>
            毎日の買い出しに、
            <br />
            手のひらサイズの冷蔵庫
          </h1>
        </div>
        <div className='z-1 absolute bottom-5 flex w-full items-center justify-center'>
          <button
            className='text-center text-white transition-transform duration-500 ease-out hover:translate-y-3'
            type='button'
            onClick={() => {
              window.scrollTo({
                top: document.getElementById('secondSection')?.offsetTop,
                behavior: 'smooth',
              });
            }}
          >
            <p className='text-xl font-bold'>SCROLL</p>
            <span className='material-icons text-5xl'>
              keyboard_double_arrow_down
            </span>
          </button>
        </div>
      </div>
      {/* トップページ二段目 */}
      <div
        id='secondSection'
        className=' h-screen max-h-[1080px] min-h-[600px] w-screen px-3 sm:flex'
      >
        <div className='relative flex w-full flex-col items-center justify-center sm:basis-1/2'>
          <h2 className='mb-[72px] text-center text-3xl font-semibold'>
            「冷蔵庫に何があったっけ？」
            <br />
            「食材買い忘れた、、」
            <br />
            「間違って同じ食材買っちゃった！」
          </h2>
          <p className='mb-16 text-center text-xl'>
            こんな経験ありませんか？
            <br />
            MyFridgeを使えばいつでもどこでも簡単に
            <br />
            冷蔵庫の中身を確認することができます。
          </p>
          <Button
            icon='/icons/arrow_circle_right.svg'
            className='my-2 mr-[16px] bg-custom-accent text-sm sm:flex sm:text-base'
            link='/about'
          >
            詳細はこちら
          </Button>
        </div>
        <div className='w-full sm:basis-1/2'>
          <div className='relative flex items-center justify-center'>
            <div className='absolute top-72'>
              <Image
                src='/img/question.png'
                alt='悩んでいる女性'
                width={400}
                height={400}
              />
            </div>
            <div className='absolute top-5 left-10'>
              <Image
                src='/img/lettuse.png'
                alt='レタス'
                width={200}
                height={200}
              />
            </div>
            <div className='absolute top-10'>
              <Image
                src='/img/chineseLettuse.png'
                alt='白菜'
                width={200}
                height={200}
              />
            </div>
            <div className='absolute top-64 left-3'>
              <Image src='/carrot.png' alt='人参' width={200} height={200} />
            </div>
          </div>
        </div>
      </div>
      {/* トップページ三段目 */}
      <div
        id='thirdSection'
        className=' h-screen max-h-[1080px] min-h-[600px] w-screen px-3 sm:flex'
      >
        <div className='w-full sm:basis-1/2'>
          <div className='relative flex items-center justify-center'>
            <div className='absolute top-5 left-0'>
              <Image
                src='/img/flash.png'
                alt='ひらめいた女性'
                width={400}
                height={400}
              />
            </div>
            <div className='absolute top-72 right-0'>
              <Image
                src='/img/shopping.png'
                alt='買い物中の女性'
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center sm:basis-1/2'>
          <h2 className='mb-[72px] text-center text-3xl font-semibold'>
            はじめてみる
          </h2>
          <p className='mb-16 text-center text-xl'>
            登録は簡単、家族みんなで利用できます。
            <br />
            日々の買い出しで悩むことはもうありません、早速始めましょう！
          </p>
          <Button
            icon='/icons/create.svg'
            className='my-2 mr-[16px] bg-custom-accent text-sm sm:flex sm:text-base'
            link='/'
          >
            新規登録
          </Button>
        </div>
      </div>

      <ScrollTopButton />
    </main>
  </>
);

export default Top;
