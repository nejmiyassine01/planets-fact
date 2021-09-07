import React, { useState } from 'react';
import * as Fa from 'react-icons/fa';

import {
  PlanetWrapper,
  PlanetContainer,
  PlanetContent,
  PlanetImage,
  TabsButtons,
  PlanetFooter,
  PlanetFooterItem,
  PlanetFooterTitle,
  PlanetFooterText,
} from './Planets.style';

import data from '../../Data/data.json';
import { tabs } from '../../Data/tabs';
import { useLocation } from 'react-router';

const Mercury = () => {
  const query = useLocation();
  const path = query.pathname;
  const clearPath = path.replace(/[^\w\s]/gi, '');

  const [currentTab, setCurrentTab] = useState(tabs[0].data);

  const handleClick = (e) => setCurrentTab(e.target.value);
  console.log(data[0][currentTab]);
  console.log(currentTab);

  return (
    <>
      {data
        .filter(({ name }) => name === clearPath)
        .map((data) => (
          <div key={data.id}>
            <PlanetWrapper>
              <PlanetImage>
                <img src={data.images[currentTab]} alt={data.name} />
              </PlanetImage>
              <PlanetContainer>
                <PlanetContent>
                  <h3>{data.name}</h3>
                  <p>{data[currentTab].content}</p>
                  <span>
                    Source:{' '}
                    <a
                      href={data[currentTab].source}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Wikipedia
                    </a>
                    <Fa.FaExternalLinkSquareAlt />
                  </span>
                </PlanetContent>
                <TabsButtons>
                  {tabs.map(({ id, data }) => (
                    <button key={id} onClick={handleClick} value={data}>
                      {/* {console.log(data)} */}
                      <span>0{id}</span> {data}
                    </button>
                  ))}
                </TabsButtons>
              </PlanetContainer>
            </PlanetWrapper>
            <PlanetFooter>
              <PlanetFooterItem>
                <PlanetFooterTitle>Rotation Time</PlanetFooterTitle>
                <PlanetFooterText>{data.rotation}</PlanetFooterText>
              </PlanetFooterItem>
              <PlanetFooterItem>
                <PlanetFooterTitle>Revolution Time</PlanetFooterTitle>
                <PlanetFooterText>{data.revolution}</PlanetFooterText>
              </PlanetFooterItem>
              <PlanetFooterItem>
                <PlanetFooterTitle>Radius</PlanetFooterTitle>
                <PlanetFooterText>{data.radius}</PlanetFooterText>
              </PlanetFooterItem>
              <PlanetFooterItem>
                <PlanetFooterTitle>Average Temp</PlanetFooterTitle>
                <PlanetFooterText>{data.temperature}</PlanetFooterText>
              </PlanetFooterItem>
            </PlanetFooter>
          </div>
        ))}
    </>
  );
};

export default Mercury;
