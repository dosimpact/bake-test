import Image from "next/image";
import React from "react";
import useStep from "../hooks/useStep";
import { useRouter } from "next/navigation";

const Completed = () => {
  const { push } = useRouter();
  const { setStep } = useStep();
  return (
    <section className="flex flex-col justify-between h-[100%] ">
      <section>
        <article className="mt-[100px] h-[50px] w-full ">
          <div className="relative">
            <div className=" absolute left-0">
              <div className=" w-[48px] h-[48px] relative">
                <Image
                  src={"/AVAX.png"}
                  alt="img"
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
            <div className=" absolute left-[30px]">
              <div className=" w-[48px] h-[48px] relative">
                <Image
                  src={"/Deposit.png"}
                  alt="img"
                  fill
                  className=" object-cover"
                />
              </div>
            </div>
          </div>
        </article>

        <article className="mt-[32px]">
          <h1 className="w-full font-bold text-[22px] ">
            아발란체(AVAX) <br />
            스테이킹 완료
          </h1>
          <div className=" my-[32px] h-[1px] bg-[#EBEEF1] w-full "></div>
          <span className=" text-[14px] text-[#676767] ">
            스테이킹 신청 수량
          </span>
          <h1 className="w-full font-bold text-[22px] ">59.24212 AVAX</h1>
        </article>
        <article></article>
      </section>
      <section className="flex flex-row gap-[10px] ">
        <button
          onClick={() => {
            push("/");
          }}
          className=" bg-[white]
        w-[100%] h-[52px] rounded-lg text-[#F76800] border border-[#F76800]
        disabled:bg-[#F6F6F6] disabled:text-[#C5C5C5]
        "
        >
          닫기
        </button>
        <button
          onClick={() => {
            push("/");
          }}
          className=" bg-[#F76800]
        w-[100%] h-[52px] rounded-lg text-[white]
        disabled:bg-[#F6F6F6] disabled:text-[#C5C5C5]
        "
        >
          스테이킹 내역
        </button>
      </section>
    </section>
  );
};

export default Completed;
