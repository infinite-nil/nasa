import { ButtonHTMLAttributes, FC } from "react";
import { Wrapper } from "./button.styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export { Button };
