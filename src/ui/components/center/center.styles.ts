import styled from "styled-components";
import * as CSS from "csstype";

type SizeProp = string | number;

type Props = {
  height: SizeProp;
  width: SizeProp;
  direction: CSS.Property.FlexDirection;
};

const Wrapper = styled.div<Props>`
  align-items: center;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  height: ${({ height }) => height};
  justify-content: center;
  margin: 0 auto;
  width: ${({ width }) => width};
`;

export type { Props };
export { Wrapper };
