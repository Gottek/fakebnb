import styled from "styled-components";
import { alpha } from "@mui/material/styles";
import {
  GiIsland,
  GiVikingLonghouse,
  GiFamilyHouse,
  GiSandCastle,
  GiSurfBoard,
} from "react-icons/gi";
import { FaWarehouse, FaRegSnowflake } from "react-icons/fa";
import { BsHouseFill } from "react-icons/bs";
import { TbBuildingLighthouse } from "react-icons/tb";
import { AiOutlineCoffee } from "react-icons/ai";
import { VscSettings } from "react-icons/vsc";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 100px 15px;
  top: 0px;
  z-index: 100;
  position: sticky;
  background-color: white;

  #qqch {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    color: #717171;
    cursor: pointer;
    transition: 0.5s;

    svg {
      width: 23px;
      height: 23px;
    }
    :hover {
      * {
        color: black;
      }
    }
  }
`;

const iconsArray = [
  { icon: <GiIsland />, text: "îles" },
  { icon: <FaWarehouse />, text: "Entrepot" },
  { icon: <BsHouseFill />, text: "House" },
  { icon: <TbBuildingLighthouse />, text: "Lighthouse" },
  { icon: <GiVikingLonghouse />, text: "Viking" },
  { icon: <AiOutlineCoffee />, text: "Chambre d'hôte" },
  { icon: <GiSandCastle />, text: "Plage" },
  { icon: <FaRegSnowflake />, text: "Artic" },
  { icon: <GiSurfBoard />, text: "Surf" },
  { icon: <GiSurfBoard />, text: "Surf" },
  { icon: <GiSurfBoard />, text: "Surf" },
  { icon: <GiSurfBoard />, text: "Surf" },
];

const Navigation = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <StyledNavigation>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile={false}
        TabIndicatorProps={{ style: { background: "black" } }}
        sx={{
          display: "flex",
          alignItems: "center",
          "button:hover": {
            color: "#000",
            borderBottom: 2,
            borderColor: "#717171",
            transition: "0.1s",
          },
          "& button:focus": { color: "black" },
          ".Mui-selected": { color: "black" },
          "& button:active": { height: "10%" },
          svg: { width: "23px", height: "23px" },
          ".MuiTabs-scrollButtons": {
            border: "1px solid black",
            borderRadius: "50px",
            height: "25px",
            width: "25px",
            borderColor: "gray",
          },
        }}
      >
        {iconsArray.map((e) => (
          <Tab
            key={uuid()}
            label={e.text}
            icon={e.icon}
            disableRipple
            sx={{
              "& button:hover": { color: "#000", outline: "none" },
              "& button:focus": { color: "black" },
              "& button:active": { color: "black" },
              "&.Mui-selected": { color: "black" },
              fontSize: "10px",
              fontWeight: "bolder",
            }}
          />
        ))}
      </Tabs>
      <div className="flex p-3 justify-center items-center space-x-2 border border-gray-300 rounded-xl ml-3 text-sm cursor-pointer">
        <VscSettings />
        <div>Filters</div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
