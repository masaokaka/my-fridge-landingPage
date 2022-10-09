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
    <header className='py-2 px-2 sm:px-[32px] flex justify-between items-center flex-wrap'>
      <Link href="/">
        <Image className='cursor-pointer' src="/logo.svg" alt="MyFridge Logo" width={80} height={80} />
      </Link>
      <div className='flex items-center flex-wrap'>
        {!isAboutPage && (
          <Link href="/about" passHref>
            <div className='mr-[16px] text-sm sm:text-base text-black cursor-pointer'>サービスについて</div>
          </Link>
        )}
        <Button className='mr-[16px] my-2 text-sm sm:text-base' icon='/login.svg'>ログイン</Button>
        <Button className={`${isTopPage ? 'hidden' : 'block'} sm:flex mr-[16px] my-2 bg-custom-accent text-sm sm:text-base`} icon='/create.svg'>新規登録</Button>
      </div>
    </header>
  )
};

export default Header;
