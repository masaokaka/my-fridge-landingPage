import { memo } from 'react';

/**
 * フッター部分
 * @returns コンポーネント
 */
const Footer = memo(() => (
  <footer className='bottom-0 flex h-[127px] w-full items-center justify-center bg-custom-main text-custom-base sm:justify-start'>
    <div className='m-auto'>©️2022 MyFridge. All Rights Reserved.</div>
  </footer>
));

Footer.displayName = 'Footer';

export default Footer;
