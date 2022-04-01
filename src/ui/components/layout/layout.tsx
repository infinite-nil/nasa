import { FC } from "react";
import { NavBar, Wrapper } from "./layout.styles";

const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <NavBar>João Alberto</NavBar>
      {children}
    </Wrapper>
  );
};

export { Layout };
