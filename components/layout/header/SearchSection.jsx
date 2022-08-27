import React from "react";
import styled from "styled-components";

const StyledSearchSection = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
  border-radius: 30px;
  box-shadow: 0px 10px 30px 3px #e5e5e5;
  padding: 12px 20px;
  border: 1px solid #e5e5e5;
  align-items: center;
  font-family: "Handlee", cursive;
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
      <div>Add travelers</div>
    </StyledSearchSection>
  );
};

export default SearchSection;
