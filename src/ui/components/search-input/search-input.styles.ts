import styled from "styled-components";

const Input = styled.input`
  border: none;
  margin: 0;
  outline: none;
  pading: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  border: 2px solid #efefef;
  border-radius: 8px;
  display: flex;
  padding: 4px;
  width: 100%;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: -1px;
  }
`;

export { Input, Wrapper };
