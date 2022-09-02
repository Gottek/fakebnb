import React, { useState } from "react";
import styled from "styled-components";
import { cardArray } from "../../mock/mockData";
import Image from "next/image";
import HouseCard from "./card/HouseCard";

const LandingPage = () => {
  const [cardsArray] = useState(cardArray);
  return (
    <>
      <div className="px-24 flex flex-wrap gap-5">
        {cardsArray.map((card) => (
          <HouseCard key={card.id} cardElement={card} />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
