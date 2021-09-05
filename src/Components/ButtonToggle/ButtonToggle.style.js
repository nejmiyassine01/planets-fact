import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 32px;
  right: 32px;
  padding: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.fontColor};
  transition: all 0.3s linear;

  svg {
    color: ${({ theme }) => theme.backgroundColor};
    transition: all 0.3s linear;
    font-size: 20px;
  }
`;
