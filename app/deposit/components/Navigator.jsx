"use client";
import React, { useEffect } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import useStep, { DEPOSIT_STEP } from "../hooks/useStep";
import { useRouter } from "next/navigation";

const Navigator = () => {
  const { push } = useRouter();
  const { currentStep, initStep, setStep } = useStep();

  const title = currentStep === DEPOSIT_STEP.SELECTE ? "입금" : "";

  const showBack = [DEPOSIT_STEP.SELECTE, DEPOSIT_STEP.AMOUNT].includes(
    currentStep
  );

  const showClose = [DEPOSIT_STEP.COMPLETED].includes(currentStep);

  const onGoBack = () => {
    if ([DEPOSIT_STEP.SELECTE, DEPOSIT_STEP.COMPLETED].includes(currentStep)) {
      push("/");
    }
    if (currentStep === DEPOSIT_STEP.AMOUNT) {
      setStep(DEPOSIT_STEP.SELECTE);
    }
    if (currentStep === DEPOSIT_STEP.PASSWORD) {
    }
  };

  return (
    <section>
      <div className=" flex flex-row items-center">
        {showBack && (
          <span onClick={onGoBack} className=" cursor-pointer">
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
    </section>
  );
};

export default Navigator;
