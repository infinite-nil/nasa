import styled from "styled-components";

const Wrapper = styled.button`
  background: #efefef;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  margin: 0 8px;
  padding: 8px;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

export { Wrapper };
