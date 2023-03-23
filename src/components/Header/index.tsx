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
  const isAboutPage = router.pathname === '/about';
  return (
    <header className='sticky top-0 z-50 flex h-[80px] w-full flex-wrap items-center justify-between bg-custom-base py-2 px-2 sm:h-[100px]'>
      <div className='flex h-[50px] w-[70px] items-center rounded-lg align-middle md:h-[90px] md:w-[110px]'>
        <Link href='/' className='flex items-center align-middle'>
          <Image
            className='cursor-pointer'
            src='/icons/logo.svg'
            alt='MyFridge Logo'
            width={100}
            height={80}
            unoptimized
          />
        </Link>
      </div>
      <div className='flex flex-wrap items-center'>
        {!isAboutPage && (
          <Link href='/about' passHref>
            <div className=' mr-[16px] cursor-pointer text-sm font-bold text-custom-black md:text-lg'>
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
          className='my-2 hidden text-sm sm:flex sm:text-base'
          icon='/icons/create.svg'
          buttonColor='bg-custom-accent'
        >
          新規登録
        </Button>
      </div>
    </header>
  );
};

export default Header;
