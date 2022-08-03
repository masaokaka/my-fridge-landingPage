import Link from 'next/link';
import Image from 'next/image';

const Header = (): JSX.Element => (
  <div>
    <h1>ヘッダー</h1>
    <Link href="/">
      <Image src="/logo.svg" alt="MyFridge Logo" width={80} height={40} />
    </Link>
  </div>
);

export default Header;
