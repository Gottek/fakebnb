import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { TiHeartFullOutline } from "react-icons/ti";

const CarrouselCard = ({ imageArray }: any) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = imageArray.length; // so that we know how many dots

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step); // handle swipe change
  };
  const [isHover, setHover] = useState(false);
  return (
    <div
      className="relative"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {imageArray.length && (
        <SwipeableViews
          axis={"x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
        >
          {imageArray.map((image: any, index: any) => {
            return (
              <div key={image.id} className="rounded-2xl">
                <Box
                  className="object-cover rounded-2xl"
                  component="img"
                  width="100%"
                  height={262}
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                  alt={image.id}
                ></Box>
              </div>
            );
          })}
        </SwipeableViews>
      )}
      <div className="absolute bottom-0 h-full w-full">
        <div className="flex flex-col h-full justify-between px-4 ">
          <div className="flex justify-end opacity-70 pt-3">
            <TiHeartFullOutline size={27} strokeWidth="2" stroke="white" />
          </div>
          {isHover && (
            <div className="flex justify-between ">
              <div
                onClick={handleBack}
                className="flex justify-center items-center bg-white opacity-70 hover:opacity-100 shadow-lg hover:scale-110 rounded-full p-1"
              >
                <KeyboardArrowLeft />
              </div>
              <div
                className="flex justify-center items-center bg-white opacity-70 hover:opacity-100 shadow-lg hover:scale-110 rounded-full p-1"
                onClick={handleNext}
              >
                <KeyboardArrowRight />
              </div>
            </div>
          )}
          <div className="flex justify-center">
            <MobileStepper
              sx={{
                ".MuiMobileStepper-dotActive": { backgroundColor: "white" },
                backgroundColor: "transparent",
              }}
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={null}
              backButton={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrouselCard;
