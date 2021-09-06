import styled from 'styled-components';
import { device } from '../../styles/Breakpoint';

export const PlanetContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 150px 0 20px;

  @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
  }

  @media ${device.tablet} {
    padding: 40px 0 20px;
  }
`;

export const PlanetImage = styled.div`
  width: 57%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.laptop} {
    margin: 20px 0 60px;
    width: 100%;
  }

  img {
    width: 300px;
    height: 300px;
  }
`;

export const PlanetWrapper = styled.div`
  width: 40%;

  @media ${device.laptop} {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  p {
    margin: ${({ theme }) => theme.marginMedium} 0;
    max-width: 350px;
    line-height: 25px;
    font-weight: 300;

    @media ${device.laptop} {
      max-width: 100%;
    }
  }

  span,
  a {
    color: ${({ theme }) => theme.linkColor};
  }

  a {
    font-weight: 700;
    margin-right: 3px;

    &:hover {
      text-decoration: none;
    }
  }

  svg {
    font-size: 12px;
  }
`;

export const PlanetContent = styled.div`
  margin-bottom: ${({ theme }) => theme.marginMedium};

  @media ${device.laptop} {
    width: 48%;
  }

  @media ${device.tablet} {
    padding: 0 20px;
    width: 100%;
  }
`;

export const TabsButtons = styled.div`
  @media ${device.laptop} {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    margin: ${({ theme }) => theme.marginSmall} 0;
    background: transparent;
    color: ${({ theme }) => theme.fontColor};
    border: 1px solid ${({ theme }) => theme.linkColor};
    height: 50px;
    width: 300px;
    text-align: start;
    padding-left: 20px;
    text-transform: uppercase;
    font-weight: 700;
    transition: 0.3s linear;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.hoverColor};

      span {
        color: ${({ theme }) => theme.hoverColor};
      }
    }

    span {
      padding-right: 20px;
    }
  }
`;
