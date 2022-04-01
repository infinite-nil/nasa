import styled from "styled-components";

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 2px rgba(200, 200, 230, 0.5);
  padding: 8px;
  width: 400px;
  `;

const Label = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  `;

const Image = styled.img`
  border-radius: 8px;
  height: 100%;
  max-height: 300px;
  object-fit: cover;
  width: 100%;
`;

export { Image, Label, Wrapper };
