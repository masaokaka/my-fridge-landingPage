import type { NextPage } from 'next';
import Image from 'next/image';
import Button from '../components/uiParts/Button';
import ScrollTopButton from '../components/uiParts/ScrollTopButton';
import CustomHead from '../components/uiParts/CustomHead';

const Top: NextPage = () => (
  <>
    {/* ヘッダ情報 */}
    <CustomHead
      title='冷蔵庫にある食品を簡単に管理できるアプリ！'
      description='冷蔵庫にある食品を簡単に管理できるアプリです。登録も簡単！'
    />
    <Image
      src='/img/topImage.svg'
      alt='トップ画像'
      layout='fill'
      objectFit='cover'
      className='blur-sm'
      unoptimized
    />
    {/* トップページ内コンテンツ */}
    {/* トップページ一段目 */}
    <div className='relative h-[calc(100vh-80px)] w-full sm:h-[calc(100vh-100px)]'>
      <div className='z-3 absolute flex h-full w-full flex-col items-center justify-center'>
        <h1 className='font-semibold leading-snug text-white md:text-6xl'>
          毎日のお買い物に、
          <br />
          手のひらサイズの冷蔵庫
        </h1>
        <Button
          className='my-2 mt-16 flex text-sm sm:hidden sm:text-base'
          icon='/icons/create.svg'
          buttonColor='bg-custom-accent'
        >
          新規登録
        </Button>
      </div>
      <div className='z-3 absolute bottom-5 flex w-full items-center justify-center'>
        <button
          className='text-center text-white transition-transform duration-500 ease-out hover:translate-y-3'
          type='button'
          onClick={() => {
            const content = document.getElementById('secondSection');
            const headerHeight = window.innerWidth <= 640 ? 80 : 100;
            if (content) {
              window.scrollTo({
                top: content.offsetTop - headerHeight,
                behavior: 'smooth',
              });
            }
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
      className='h-full w-full px-3 py-10 sm:px-20 md:flex'
    >
      <div className='flex w-full flex-col items-center justify-center sm:basis-1/2'>
        <h2 className='mb-[72px] text-center font-semibold md:text-3xl'>
          「冷蔵庫に何があったっけ？」
          <br />
          「食材買い忘れた、、」
          <br />
          「間違って同じ食材買っちゃった！」
        </h2>
        <p className='mb-10 text-xl md:mb-16'>
          こんな経験ありませんか？
          <br />
          MyFridgeを使えばいつでもどこでも簡単に
          <br />
          冷蔵庫の中身を確認することができます。
        </p>
        <Button
          icon='/icons/arrow_circle_right.svg'
          link='/about'
          className='w-[140px]'
          buttonColor='bg-custom-accent'
        >
          詳細はこちら
        </Button>
      </div>
      <div className='my-auto hidden text-center md:block md:w-[50%]'>
        <Image
          src='/img/question.png'
          alt='悩んでいる女性'
          width={400}
          height={400}
          unoptimized
        />
      </div>
    </div>
    {/* トップページ三段目 */}
    <div
      id='thirdSection'
      className='h-full w-full py-10 px-3 sm:px-20  md:flex'
    >
      <div className='my-auto hidden text-center md:block md:w-[50%]'>
        <Image
          src='/img/flash.png'
          alt='ひらめいた女性'
          width={400}
          height={400}
          unoptimized
        />
      </div>
      <div className='flex w-full flex-col items-center justify-center sm:basis-1/2'>
        <h2 className='mb-[72px] text-center text-3xl font-semibold'>
          はじめてみる
        </h2>
        <p className='mb-10 text-xl md:mb-16'>
          登録は簡単、家族みんなで利用できます。
          <br />
          日々の買い出しで悩むことはもうありません、早速始めましょう！
        </p>
        <Button
          icon='/icons/create.svg'
          link='/'
          buttonColor='bg-custom-accent'
        >
          新規登録
        </Button>
      </div>
    </div>
    <ScrollTopButton />
  </>
);

export default Top;
