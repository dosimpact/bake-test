"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import useDeposit from "../hooks/useDeposit";
import useStep from "../hooks/useStep";

// TODO 웹에서 가상키패드로 암호화 하는 이유
const Password = () => {
  const { setStep } = useStep();
  const { userInputPassword, setUserInputPassword } = useDeposit();
  const inputRef = useRef(null);

  const onToogleKeypad = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    onToogleKeypad();
  }, []);

  return (
    <section>
      <h1 className=" mt-[32px] w-full font-bold text-[22px] text-center ">
        비밀번호를 입력해 주세요
      </h1>
      <h2 className=" text-[14px] text-[#676767] text-center underline">
        비밀번호를 잊었나요?
      </h2>
      <input
        ref={inputRef}
        className="w-[0px] h-[0px]"
        type="number"
        inputmode="numeric"
        value={userInputPassword}
        onChange={(e) => {
          const inputValue = e.target.value;
          const digit = /^\d{0,6}$/;
          if (inputValue === "" || digit.test(inputValue)) {
            setUserInputPassword(inputValue);
            if (inputValue.length === 6) {
              setStep("COMPLETED");
            }
          }
        }}
      />

      <article
        className=" flex flex-row items-center justify-center gap-[40px] h-[256px]
        cursor-pointer"
        onClick={onToogleKeypad}
      >
        {Array.from({ length: 6 }, (_, index) => (
          <div
            className={cn(
              "bg-[#DCDCDC] w-4 h-4 rounded-full",
              index < userInputPassword.length && "bg-[#F76800]"
            )}
          ></div>
        ))}
      </article>
    </section>
  );
};

export default Password;
