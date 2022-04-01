import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.headings};
  font-size: 3rem;
  width: 100%;
`;

const Error = styled.p`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.error};
  width: 100%;
`;

export { Error, Title };
