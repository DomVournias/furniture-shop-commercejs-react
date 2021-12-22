import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HeroSlider from "./HeroSlider";

const HomeHero = () => {
  return (
    <HeroWrapper>
      <HeroWrapperInner>
        <HeroLeft>
          <HeroTitle>Κλασσικά Έπιπλα</HeroTitle>
          <HeroDescription>
            Μέχρι και <span>50% εκπτωση</span>
          </HeroDescription>
          <HeroCTA to="#">Δείτε τις προσφορές</HeroCTA>
        </HeroLeft>
        <HeroRight>
          <HeroSlider />
        </HeroRight>
      </HeroWrapperInner>
    </HeroWrapper>
  );
};

export default HomeHero;

const HeroWrapper = styled.div`
  display: block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.light};
`;
const HeroWrapperInner = styled.div`
  display: flex;
  max-width: 1600px;
  padding: 10rem 1rem;
  margin: 0 auto;
`;
const HeroLeft = styled.div`
  width: 50%;
`;
const HeroTitle = styled.h1`
  font-size: 3rem;
`;
const HeroDescription = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  > span {
    font-size: 2.6rem;
    font-weight: 800;
    color: white;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
const HeroCTA = styled(Link)`
  font-size: 1.5rem;
  padding: 1rem 1.5rem;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.threeD};
  transition-duration: 200ms;
  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow.threeD_hover};
  }
`;

const HeroRight = styled.div`
  width: 50%;
`;
const HeroSliderWrapper = styled.div``;
