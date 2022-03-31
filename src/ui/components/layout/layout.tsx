import { FC } from "react";
import { Wrapper } from "./layout.styles";

const Layout: FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export { Layout };
