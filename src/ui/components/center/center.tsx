import { FC } from "react";
import { Wrapper, Props } from "./center.styles";

const Center: FC<Partial<Props>> = ({
  children,
  direction = "initial",
  height = "auto",
  width = "auto",
}) => {
  return (
    <Wrapper direction={direction} height={height} width={width}>
      {children}
    </Wrapper>
  );
};

export { Center };
