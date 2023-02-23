export type ButtonProps = {
  /** 子コンポーネント */
  children: React.ReactNode;
  /** id名 */
  id?: string;
  /** 追加クラス */
  className?: string;
  /** buttonタイプ */
  type?: 'button' | 'submit' | 'reset';
  /** icon-src */
  icon?: string;
  /** onClick時の処理 */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<void>;
  /** 遷移したいリンク */
  link?: string;
  /** ボタン色 */
  buttonColor?: 'bg-custom-main' | 'bg-custom-accent';
};
