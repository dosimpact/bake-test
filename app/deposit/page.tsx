"use client";
import React, { useEffect } from "react";
import Navigator from "./components/Navigator";
import Select from "./containers/Select";
import Amount from "./containers/Amount";
import Password from "./containers/Password";
import Completed from "./containers/Completed";
import useStep, { DEPOSIT_STEP } from "./hooks/useStep";
import MobileLayout from "@/components/layout/MobileLayout";
import useDeposit from "./hooks/useDeposit";

const Page = () => {
  const { currentStep, initStep } = useStep();
  const { initDeposit } = useDeposit();

  useEffect(() => {
    initStep();
    initDeposit();
  }, []);

  return (
    <MobileLayout>
      <div className="h-[100%]">
        <Navigator />
        <section className="mt-[32px] h-[calc(100vh-100px)] ">
          {currentStep === DEPOSIT_STEP.SELECTE && <Select />}
          {currentStep === DEPOSIT_STEP.AMOUNT && <Amount />}
          {currentStep === DEPOSIT_STEP.PASSWORD && <Password />}
          {currentStep === DEPOSIT_STEP.COMPLETED && <Completed />}
        </section>
      </div>
    </MobileLayout>
  );
};

export default Page;
