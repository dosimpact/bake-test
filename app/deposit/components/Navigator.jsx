"use client";
import React, { useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useStep, { DEPOSIT_STEP } from "../hooks/useStep";
import Select from "../containers/Select";
import Amount from "../containers/Amount";
import Password from "../containers/Password";
import Completed from "../containers/Completed";

const Navigator = () => {
  const { currentStep, initStep, setStep } = useStep();

  const title = currentStep === DEPOSIT_STEP.SELECTE ? "입금" : "";

  const showBack = [DEPOSIT_STEP.SELECTE, DEPOSIT_STEP.AMOUNT].includes(
    currentStep
  );

  const showClose = [DEPOSIT_STEP.COMPLETED].includes(currentStep);

  useEffect(() => {
    initStep();
  }, [initStep]);

  return (
    <section>
      <div className=" flex flex-row items-center">
        {showBack && (
          <span className=" cursor-pointer">
            <IoChevronBack size={20} />
          </span>
        )}
        <span className="mx-[12px]"> {title}</span>
        {showClose && (
          <span className=" cursor-pointer">
            <IoClose size={20} />
          </span>
        )}
      </div>
      {currentStep === DEPOSIT_STEP.SELECTE && <Select />}
      {currentStep === DEPOSIT_STEP.AMOUNT && <Amount />}
      {currentStep === DEPOSIT_STEP.PASSWORD && <Password />}
      {currentStep === DEPOSIT_STEP.COMPLETED && <Completed />}
    </section>
  );
};

export default Navigator;
