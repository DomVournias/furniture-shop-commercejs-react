import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <Navigation>
        {/* {categories.map((category, key) => (
          <StyledLink key={key} to={category.path}>
            <span>{category.label}</span>
          </StyledLink>
        ))} */}
      </Navigation>
    </>
  );
};

export default NavLinks;

const Navigation = styled.div`
  display: block;
  text-align: end;
`;

const StyledLink = styled(Link)`
  padding: 0.3em 0.5em;
  margin: 0 0.7em;
  color: white;
  text-decoration: none;
  text-align: center;
  > span {
    font-size: 0.9em;
    font-weight: 600;
    cursor: pointer;
  }
`;
