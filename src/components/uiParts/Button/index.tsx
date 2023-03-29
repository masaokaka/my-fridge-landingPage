import React, { useCallback, memo, FC } from 'react';
import Router from 'next/router';
import { ButtonProps } from './types';

/**
 * ボタンコンポーネント
 * @param param0.children 子コンポーネント
 * @param param0.id id名
 * @param param0.className 追加クラス
 * @param param0.type buttonタイプ
 * @param param0.icon iconのsrc
 * @param param0.onClick onClick時の処理
 * @returns コンポーネント
 */
const Button: FC<ButtonProps> = memo(
  ({
    children,
    id,
    className,
    type = 'button',
    icon,
    onClick,
    link,
    buttonColor = 'bg-custom-main',
  }) => {
    /** ページ遷移用関数 */
    const movePage = useCallback(
      (pageLink: string) => Router.push(pageLink),
      []
    );
    return (
      /* eslint-disable react/button-has-type */
      <button
        id={id}
        className={`flex h-[40px] w-[120px] items-center justify-center rounded-3xl text-sm sm:text-base ${buttonColor} font-semibold text-custom-base sm:h-[50px] sm:w-[160px] ${
          className || ''
        }`}
        onClick={link ? () => movePage(link) : onClick}
        type={type}
      >
        {icon && <img src={icon} alt='icon' width={26} height={26} />}
        <span className='ml-2'>{children}</span>
      </button>
    );
  }
);

export default Button;
