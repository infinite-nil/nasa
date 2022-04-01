import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavBar, Wrapper } from "./layout.styles";

const Layout: FC = ({ children }) => {
  const { pathname } = useRouter();
  const canGoBack = pathname !== "/";

  return (
    <Wrapper>
      <NavBar>
        {canGoBack ? <Link href="/">&lt; João Alberto</Link> : "João Alberto"}
      </NavBar>
      {children}
    </Wrapper>
  );
};

export { Layout };
