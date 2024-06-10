import CryptoItem from "@/components/CryptoItem";
import React from "react";
import useStep, { DEPOSIT_STEP } from "../hooks/useStep";

const CryptoItemList = [
  {
    ticker: "AVAX",
    name: "아발란체",
    quantity: "100.1239",
  },
  {
    ticker: "DOT",
    name: "폴카닷",
    quantity: "0",
  },

  {
    ticker: "APT",
    name: "앱토스",
    quantity: "12",
  },
  {
    ticker: "INJ",
    name: "인젝티브",
    quantity: "12",
  },
];

const Select = () => {
  const { currentStep, initStep, setStep } = useStep();

  const onClickTicker = () => {
    setStep(DEPOSIT_STEP.AMOUNT);
  };

  return (
    <section>
      <h1 className=" mt-[32px] w-full font-bold text-[22px] ">
        입금을 진행할
        <br /> 암호화폐를 선택해주세요.
      </h1>
      <div className=" mt-[20px] flex flex-col gap-[20px] ">
        {CryptoItemList?.map((item) => (
          <CryptoItem
            key={item.ticker}
            ticker={item.ticker}
            name={item.name}
            quantity={item.quantity}
            onClickTicker={onClickTicker}
          />
        ))}
      </div>
    </section>
  );
};

export default Select;
