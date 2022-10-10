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
    <header className='flex flex-wrap items-center justify-between py-2 px-2 sm:px-[32px]'>
      <Link href='/'>
        <Image
          className='cursor-pointer'
          src='/logo.svg'
          alt='MyFridge Logo'
          width={80}
          height={80}
        />
      </Link>
      <div className='flex flex-wrap items-center'>
        {!isAboutPage && (
          <Link href='/about' passHref>
            <div className='mr-[16px] cursor-pointer text-sm text-custom-base sm:text-base'>
              サービスについて
            </div>
          </Link>
        )}
        <Button
          className='my-2 mr-[16px] text-sm sm:text-base'
          icon='/login.svg'
        >
          ログイン
        </Button>
        <Button
          className={`${
            isTopPage ? 'hidden' : 'block'
          } my-2 mr-[16px] bg-custom-accent text-sm sm:flex sm:text-base`}
          icon='/create.svg'
        >
          新規登録
        </Button>
      </div>
    </header>
  );
};

export default Header;
