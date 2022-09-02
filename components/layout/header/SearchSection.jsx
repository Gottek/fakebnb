import React from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

const StyledSearchSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  border-radius: 30px;
  box-shadow: 0px 2px 5px 1px #e5e5e5;
  padding: 12px 20px;
  border: 1px solid #e5e5e5;
  align-items: center;
  font-family: "Handlee", cursive;

  * {
    cursor: pointer;
  }

  &:hover {
    box-shadow: 0px 2px 5px 3px #e5e5e5;
  }

  div:last-child {
    display: flex;
    gap: 10px;
    color: #808080;
    align-items: center;
    font-weight: lighter;
  }
`;

const StyledDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #dddddd;
`;

const SearchSection = () => {
  return (
    <StyledSearchSection>
      <div> Everywhere</div>
      <StyledDivider />
      <div>A week</div>
      <StyledDivider />
      <div>
        Add travelers
        <FcSearch size={30} />
      </div>
    </StyledSearchSection>
  );
};

export default SearchSection;
