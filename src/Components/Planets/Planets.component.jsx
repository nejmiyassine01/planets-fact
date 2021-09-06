import React from 'react';
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
  console.log(data);

  return (
    <>
      {data
        .filter(({ name }) => name === clearPath)
        .map(
          ({
            id,
            name,
            images,
            geology,
            radius,
            revolution,
            rotation,
            temperature,
          }) => (
            <div key={id}>
              <PlanetWrapper>
                <PlanetImage>
                  <img src={images.overview} alt={name} />
                </PlanetImage>
                <PlanetContainer>
                  <PlanetContent>
                    <h3>{name}</h3>
                    <p>{geology.content}</p>
                    <span>
                      Source:{' '}
                      <a href={geology.source} target='_blank' rel='noreferrer'>
                        Wikipedia
                      </a>
                      <Fa.FaExternalLinkSquareAlt />
                    </span>
                  </PlanetContent>
                  <TabsButtons>
                    {tabs.map(({ id, data }) => (
                      <button key={id}>
                        <span>0{id}</span> {data}
                      </button>
                    ))}
                  </TabsButtons>
                </PlanetContainer>
              </PlanetWrapper>
              <PlanetFooter>
                <PlanetFooterItem>
                  <PlanetFooterTitle>Rotation Time</PlanetFooterTitle>
                  <PlanetFooterText>{rotation}</PlanetFooterText>
                </PlanetFooterItem>
                <PlanetFooterItem>
                  <PlanetFooterTitle>Revolution Time</PlanetFooterTitle>
                  <PlanetFooterText>{revolution}</PlanetFooterText>
                </PlanetFooterItem>
                <PlanetFooterItem>
                  <PlanetFooterTitle>Radius</PlanetFooterTitle>
                  <PlanetFooterText>{radius}</PlanetFooterText>
                </PlanetFooterItem>
                <PlanetFooterItem>
                  <PlanetFooterTitle>Average Temp</PlanetFooterTitle>
                  <PlanetFooterText>{temperature}</PlanetFooterText>
                </PlanetFooterItem>
              </PlanetFooter>
            </div>
          )
        )}
    </>
  );
};

export default Mercury;
