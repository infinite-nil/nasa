import { ThemeProvider } from "styled-components";
import theme from "~/ui/theme";
import GlobalStyles from "~/ui/global-styles";
import { Layout } from "~/ui/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
