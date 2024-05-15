import style from './style.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...props }: ButtonProps) {
  return (
    <button className={style.button} {...props}>
      버튼
    </button>
  );
}
