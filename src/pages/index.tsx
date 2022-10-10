import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Top: NextPage = () => (
  <>
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
    <main className='container mx-auto min-w-[768px] max-w-[1960px]'>
      <div className='relative h-screen max-h-[1080px] min-h-[600px] w-full'>
        {/* トップページ一段目 */}
        <Image
          src='/topImage.svg'
          alt='トップ画像'
          layout='fill'
          objectFit='cover'
          className='h-full w-full blur-sm'
        />
        <div className='z-1 absolute flex h-full w-full items-center justify-center'>
          <h1 className=' text-6xl font-semibold leading-snug text-white'>
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
        <div className='flex w-full flex-col items-center justify-center sm:basis-1/2'>
          <h2 className='mb-[72px] text-3xl font-semibold'>
            「冷蔵庫に何があったっけ？」
            <br />
            「食材買い忘れた、、」
            <br />
            「間違って同じ食材買っちゃった！」
          </h2>
          <p className='mb-16 text-xl'>
            こんな経験ありませんか？
            <br />
            MyFridgeを使えばいつでもどこでも簡単に
            <br />
            冷蔵庫の中身を確認することができます。
          </p>
          <button type='button'>ボタン</button>
        </div>
        <div className='w-full sm:basis-1/2'>
          <div className='relative flex items-center justify-center'>
            <div className='absolute top-72'>
              <Image
                src='/question.png'
                alt='悩んでいる女性'
                width={400}
                height={400}
              />
            </div>
            <div className='absolute top-5 left-10'>
              <Image src='/lettuse.png' alt='レタス' width={200} height={200} />
            </div>
            <div className='absolute top-10'>
              <Image
                src='/chineseLettuse.png'
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
        className='h-screen max-h-[1080px] min-h-[600px] w-screen px-3 sm:flex'
      >
        <div className='w-full sm:basis-1/2'>画像</div>
        <div className='w-full sm:basis-1/2'>説明文</div>
      </div>
    </main>
  </>
);

export default Top;
