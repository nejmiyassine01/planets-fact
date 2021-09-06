import React, { useState } from 'react';
import * as Ai from 'react-icons/ai';
import data from '../../Data/data.json';
import { HeaderContainer, PlanetsLinks /*, TabLinks*/ } from './Header.style';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <>
      <HeaderContainer>
        <h2>The Planets</h2>
        {toggle ? (
          <Ai.AiOutlineClose onClick={toggleMenu} />
        ) : (
          <Ai.AiOutlineMenu onClick={toggleMenu} />
        )}
        <ul className={toggle ? 'active' : ''}>
          {data.map(({ name, id }) => (
            <li key={id}>
              <PlanetsLinks
                onClick={toggleMenu}
                to={name}
                activeClassName='active'
              >
                {name}
              </PlanetsLinks>
            </li>
          ))}
        </ul>
      </HeaderContainer>
    </>
  );
};

export default Header;
