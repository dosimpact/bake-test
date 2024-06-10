import React from "react";
import useDeposit from "../hooks/useDeposit";
import useStep from "../hooks/useStep";

const Amount = () => {
  const { error, expectedFee, stackQuantity, ticker, totalQuantity } =
    useDeposit();
  const { currentStep, initStep, setStep } = useStep();

  return (
    <section className="flex flex-col justify-between h-[100%] ">
      <section>
        <h1 className=" mt-[32px] w-full font-bold text-[22px] ">
          얼마나 예치할까요?
        </h1>
        <div>
          <span className=" text-[14px] text-[#676767] ">
            내 보유수량 {12.1234} AVAX
          </span>
          <span className="mx-2 cursor-pointer text-[14px] text-[#F76800]">
            더 가져오기
          </span>
        </div>
        <div className=" mt-[24px]">스테이킹 신청 수량</div>
        <article className=" mt-[10px]">
          <div className="flex flex-row justify-between rounded-lg border border-[#DCDCDC] px-3 py-4">
            <input value={123}></input>
            <div className=" text-[#222]">AVAX</div>
          </div>
          <div className="flex felx-row gap-4 mt-2">
            <button className="flex-1 rounded-lg border border-[#DCDCDC] p-2">
              10%
            </button>
            <button className="flex-1 rounded-lg border border-[#DCDCDC] p-2">
              10%
            </button>
            <button className="flex-1 rounded-lg border border-[#DCDCDC] p-2">
              10%
            </button>
            <button className="flex-1 rounded-lg border border-[#DCDCDC] p-2">
              10%
            </button>
          </div>
        </article>
        <article className="mt-[20px] flex flex-col gap-[20px] ">
          <div className="flex flex-row  justify-between">
            <span className="text-[14px] text-[#969696]">
              스테이킹 후 잔여 수량
            </span>
            <span className=" font-[500]">72.891202 AVA</span>
          </div>
          <div className="flex flex-row  justify-between">
            <span className="text-[14px] text-[#969696]">예상 수수료</span>
            <span className=" font-[500]">72.891202 AVA</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <span className="text-[14px] text-[#222]">
              총 출금(수수료 포함) <br />
              실제 스테이킹 수량
            </span>
            <span className="text-[22px] font-[700]">72.891202 AVA</span>
          </div>
        </article>
      </section>
      <article>
        <div className=" text-center text-[#969696] my-2 ">
          1년 뒤 예상되는 이자 0.00123 AVAX{" "}
        </div>
        <button
          onClick={() => {
            setStep("PASSWORD");
          }}
          className=" bg-[#F76800]
        w-[100%] h-[52px] rounded-lg text-[white] 
        "
        >
          다음
        </button>
      </article>
    </section>
  );
};

export default Amount;
