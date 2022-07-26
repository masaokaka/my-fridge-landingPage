import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../uiParts/Button';

/**
 * ヘッダー部分
 * @returns コンポーネント
 */
const Header = (): JSX.Element => {
  const router = useRouter();
  const isTopPage = router.pathname === '/';
  const isAboutPage = router.pathname === '/about';
  return (
    <header className='absolute z-10 flex w-full flex-wrap items-center justify-between py-2 px-2 sm:px-[32px]'>
      <div className='rounded-lg bg-custom-base'>
        <Link href='/'>
          <Image
            className='cursor-pointer'
            src='/icons/logo.svg'
            alt='MyFridge Logo'
            width={80}
            height={80}
          />
        </Link>
      </div>
      <div className='flex flex-wrap items-center'>
        {!isAboutPage && (
          <Link href='/about' passHref>
            <div className=' mr-[16px] cursor-pointer text-lg font-bold text-custom-base'>
              サービスについて
            </div>
          </Link>
        )}
        <Button
          className='my-2 mr-[16px] text-sm sm:text-base'
          icon='/icons/login.svg'
        >
          ログイン
        </Button>
        <Button
          className={`${
            isTopPage ? 'hidden' : 'block'
          } my-2 mr-[16px] bg-custom-accent text-sm sm:flex sm:text-base`}
          icon='/icons/create.svg'
        >
          新規登録
        </Button>
      </div>
    </header>
  );
};

export default Header;
