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
    <header className='absolute z-10 flex w-full flex-wrap items-center justify-between bg-custom-base py-2 px-2 sm:px-[32px]'>
      <div className='flex h-[90px] w-[110px] items-center rounded-lg align-middle'>
        <Link href='/' className='flex items-center align-middle'>
          <Image
            className='cursor-pointer'
            src='/icons/logo.svg'
            alt='MyFridge Logo'
            width={100}
            height={80}
          />
        </Link>
      </div>
      <div className='flex flex-wrap items-center'>
        {!isAboutPage && (
          <Link href='/about' passHref>
            <div className=' mr-[16px] cursor-pointer text-lg font-bold text-custom-black'>
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
          className='my-2 text-sm sm:text-base'
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
