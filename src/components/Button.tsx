import { createSignal } from "solid-js";

const Button = () => {
  const [clicked, setClicked] = createSignal<number>(0);

  const onClick = () => {
    setClicked((prevClicked) => prevClicked + 1);
  };

  return <button onClick={onClick}>Clicked {clicked()}</button>;
};

export default Button;
