import { memo } from 'react';

/**
 * フッター部分
 * @returns コンポーネント
 */
const Footer = memo(() => (
  <footer className='w-full h-[127px] bg-green-main text-orange-main flex items-center absolute bottom-0'>
    <p className="ml-10">©️2022 MyFridge. All Rights Reserved.</p>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
