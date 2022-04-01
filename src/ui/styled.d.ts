import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      text: string;
      headings: string;
      primary: string;
    };
  }
}
