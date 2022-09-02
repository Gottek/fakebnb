import React from "react";
import styled from "styled-components";
import { BsGlobe } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { IoPersonCircleSharp } from "react-icons/io5";

const StyledRightHeaderDiv = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
  display: flex;
  justify-content: right;
  gap: 15px;
  align-items: center;
  font-family: "Handlee", cursive;

  div {
    border-radius: 20px;
    padding: 10px;
    display: flex;
    border-radius: 25px;
    align-items: center;
  }
  *:not(#spec, #spec *):hover {
    background-color: #dadada;
    cursor: pointer;
  }

  #spec {
    padding: 7px;
    border: 1px solid #dddddd;
    gap: 10px;
    :hover {
      box-shadow: 0px 2px 5px 1px #e5e5e5;
      transition: 0.3s;
      cursor: pointer;
    }
  }
`;

const RightHeaderDiv = () => {
  return (
    <StyledRightHeaderDiv>
      <div>Devenez hôte</div>
      <div>
        <BsGlobe />
      </div>
      <div id="spec">
        <VscMenu size={18} />
        <IoPersonCircleSharp size={30} />
      </div>
    </StyledRightHeaderDiv>
  );
};

export default RightHeaderDiv;
