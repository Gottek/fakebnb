import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React from "react";

const MobileStapperCard = ({ maxSteps }: any) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1); // jumps when we click the next arrow
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1); // when we click the back arrow
  };

  const handleStepChange = (step: any) => {
    setActiveStep(step); // handle swipe change
  };
  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col grow">
        <div className="flex justify-end">coeur</div>
        <div className="flex justify-between">
          <KeyboardArrowRight />
          <KeyboardArrowLeft />
        </div>
        <div className="flex justify-center">dots</div>
      </div>
    </div>
  );
};

export default MobileStapperCard;
