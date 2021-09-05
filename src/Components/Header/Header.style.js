import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/Breakpoint';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.primary};

  @media ${device.laptop} {
    flex-direction: column;
    justify-content: center;
  }

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    position: relative;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: -1px;

    @media ${device.laptop} {
      margin-bottom: 30px;
    }

    @media ${device.tablet} {
      margin: 0;
    }
  }

  svg {
    display: none;
    font-size: 25px;

    @media ${device.tablet} {
      display: block;
    }
  }

  ul {
    display: flex;
    transition: 0.3s linear;

    @media ${device.laptop} {
      width: 100%;
      justify-content: space-around;
    }

    @media ${device.tablet} {
      position: absolute;
      flex-direction: column;
      align-items: center;
      height: calc(100vh - 60px);
      top: 60px;
      width: 100%;
      padding: 20px;
      background-color: ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.fontColor};
      left: -150%;

      &.active {
        left: 0%;
      }
    }

    li {
      list-style: none;
      margin-left: 25px;

      @media ${device.laptop} {
        margin-left: 0;
      }

      @media ${device.tablet} {
        margin: 0;
      }
    }
  }
`;

export const PlanetsLinks = styled(NavLink)`
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none;
  font-weight: 600;
  position: relative;

  @media ${device.tablet} {
    font-size: 20px;
    text-align: center;
  }

  &::after {
    content: '';
    position: absolute;
    top: -28px;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    background-color: #419db9;
    opacity: 0;
    transition: all 0.3s linear;

    @media ${device.laptop} {
      top: 30px;
    }
  }

  &:hover::after {
    opacity: 1;
  }

  &.active {
    color: ${({ theme }) => theme.fontColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -28px;
      left: 50%;
      transform: translateX(-50%);
      height: 4px;
      width: 80px;
      background-color: #419db9;
      opacity: 1;
      transition: 0.3s linear;

      @media ${device.laptop} {
        top: 41px;
      }

      @media ${device.tablet} {
        display: none;
      }
    }
  }
`;

// export const TabLinks = styled.div`
//   @media ${device.tablet} {}
// `;
