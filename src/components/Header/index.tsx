import Link from 'next/link';
import Image from 'next/image';

/**
 * ヘッダー部分
 * @returns コンポーネント
 */
const Header = (): JSX.Element => (
  <header className='py-2 px-20 flex justify-between items-center bg-gray-400'>
    <Link href="/">
      <Image src="/logo.svg" alt="MyFridge Logo" width={80} height={80} />
    </Link>
    <div className='flex'>
      <Link href="/about" passHref>
        <div className='text-base text-orange-150'>サービスについて</div>
      </Link>
      <div className='ml-5 text-orange-150'>ログイン</div>
      <div className='ml-5 text-orange-150'>新規登録</div>
    </div>
  </header>
);

export default Header;
