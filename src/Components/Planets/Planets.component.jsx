import React from 'react';
import * as Fa from 'react-icons/fa';

import {
  PlanetContainer,
  PlanetContent,
  PlanetImage,
  PlanetWrapper,
  TabsButtons,
} from './Planets.style';

import data from '../../Data/data.json';
import { tabs } from '../../Data/tabs';
import { useLocation } from 'react-router';

const Mercury = () => {
  const query = useLocation();
  const path = query.pathname;
  const clearPath = path.replace(/[^\w\s]/gi, '');

  return (
    <>
      {data
        .filter(({ name }) => name === clearPath)
        .map(({ id, name, images, geology }) => (
          <PlanetContainer key={id}>
            <PlanetImage>
              <img src={images.overview} alt={name} />
            </PlanetImage>
            <PlanetWrapper>
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
            </PlanetWrapper>
          </PlanetContainer>
        ))}
    </>
  );
};

export default Mercury;
