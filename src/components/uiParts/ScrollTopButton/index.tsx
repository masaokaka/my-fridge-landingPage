import React from 'react';

/**
 * スクロールトップボタン
 * @returns コンポーネント
 */
const ScrollTopButton = (): JSX.Element => (
  <div className='mb-10 flex w-full items-center justify-center rounded-full'>
    <button
      className='h-12 w-12 rounded-full bg-custom-accent text-center text-white transition-transform duration-500 ease-out hover:translate-y-[-10px]'
      type='button'
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <span className='material-icons text-5xl'>keyboard_arrow_up</span>
    </button>
  </div>
);
export default ScrollTopButton;
