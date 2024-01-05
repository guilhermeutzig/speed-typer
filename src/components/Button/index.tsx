import { JSX } from "solid-js/jsx-runtime";
import styles from "./styles.module.css";

type Props = {
  children: JSX.Element;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button class={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
