import React from 'react';
import Image from 'next/image';
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
const Button = ({
  children,
  id,
  className,
  type,
  icon,
  onClick,
}: ButtonProps): JSX.Element => (
  /* eslint-disable react/button-has-type */
  <button
    id={id}
    className={`${
      className || ''
    } flex h-[40px] w-[120px] items-center justify-center rounded-3xl bg-custom-main font-semibold text-custom-base sm:h-[50px] sm:w-[160px]`}
    onClick={onClick}
    type={type}
  >
    {icon && <Image src={icon} alt='icon' width={26} height={26} />}
    <span className='ml-2'>{children}</span>
  </button>
);

Button.defaultProps = {
  id: '',
  className: '',
  type: 'button',
  icon: '',
  onClick: undefined,
};
export default Button;
