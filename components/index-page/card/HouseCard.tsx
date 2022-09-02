import styled from "styled-components";
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
import { AiOutlineCoffee, AiFillStar } from "react-icons/ai";
import CarrouselCard from "./CarrouselCard";
import { useState } from "react";

const HouseCard = ({ cardElement }: any) => {
  return (
    <div className="flex flex-col grow basis-60 cursor-pointer">
      <div className="w-full">
        <CarrouselCard imageArray={cardElement.image} />
      </div>
      <div className="flex justify-center flex-col mt-4 text-sm">
        <div className="flex justify-between">
          <div className="from-neutral-700">{cardElement.location}</div>
          <div className="flex items-center">
            <AiFillStar />
            {cardElement.rating}
          </div>
        </div>
        <div className="text-gray-500">{cardElement.type}</div>
        <div className="text-gray-500">{cardElement.days}</div>
        <div className="flex space-x-2">
          <div className="font-semibold ">{cardElement.price}</div>
          <div>nuit</div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
