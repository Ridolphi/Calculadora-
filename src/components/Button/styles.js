import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid grey;
  background-color: #6F57B8; 
  color: white;
  font-size: 24px;
  font-weight: 700;
  flex: 1;

  &:hover {
    opacity: 0.6;
  }

  ${props =>
    props.special &&
    css`
      background-color: #392983;
    `}
`;

