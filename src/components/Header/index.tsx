import Link from 'next/link';
import Image from 'next/image';
import Button from '../uiParts/Button';

/**
 * ヘッダー部分
 * @returns コンポーネント
 */
const Header = (): JSX.Element => (
  <header className='py-2 px-20 flex justify-between items-center bg-gray-400'>
    <Link href="/">
      <Image src="/logo.svg" alt="MyFridge Logo" width={80} height={80} />
    </Link>
    <div className='flex items-center'>
      {/* TODO: aboutページの時は非表示にする */}
      <Link href="/about" passHref>
        <div className='text-base text-orange-150'>サービスについて</div>
      </Link>
      <Button className='ml-5' icon='/login.svg'>ログイン</Button>
      <Button className='ml-5 bg-orange-sub' icon='/create.svg'>新規登録</Button>
    </div>
  </header>
);

export default Header;
