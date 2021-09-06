import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  padding: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.fontColor};
  transition: all 0.3s linear;
  z-index: 100;

  svg {
    color: ${({ theme }) => theme.backgroundColor};
    transition: all 0.3s linear;
    font-size: 20px;
  }
`;
