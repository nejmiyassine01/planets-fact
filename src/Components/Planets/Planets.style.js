import styled from 'styled-components';
import { device } from '../../styles/Breakpoint';

export const PlanetWrapper = styled.div`
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

export const PlanetGeology = styled.div`
  position: relative;
`;

export const PlanetGeologyImage = styled.img`
  width: 150px !important;
  height: 200px !important;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const PlanetContainer = styled.div`
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
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    width: 40%;
    justify-content: center;
    align-items: center;
  }

  @media ${device.mobileS} {
    width: 100%;
    padding: 20px;
  }
`;

export const Button = styled.button`
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

  @media ${device.mobileS} {
    width: 100%;
  }

  &:hover,
  &:focus {
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
`;

export const PlanetFooter = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.tablet} {
    padding: 20px;
    justify-content: center;
  }
`;

export const PlanetFooterItem = styled.div`
  border: 1px solid ${({ theme }) => theme.fontColor};
  width: 250px;
  padding: 20px;
  margin: 10px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media ${device.mobileS} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PlanetFooterTitle = styled.h3`
  color: ${({ theme }) => theme.linkColor};
  font-size: 14px;
  text-transform: uppercase;
`;

export const PlanetFooterText = styled.p`
  font-weight: 700;
  margin-top: 5px;
  font-size: 30px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;
