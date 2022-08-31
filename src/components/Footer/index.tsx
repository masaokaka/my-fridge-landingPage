import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

const Footer = memo(() => (
  <footer>
    <div className="flex">
      <p className="mr-10">©️2022 MyFridge. All Rights Reserved.</p>
      <Link href="/">
        <Image src="/logo.svg" alt="MyFridge Logo" width={80} height={40} />
      </Link>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
