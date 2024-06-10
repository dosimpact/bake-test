import { cn } from "@/lib/utils";
import React from "react";

// TODO 웹에서 가상키패드로 암호화 하는 이유
const Password = () => {
  const onToogleKeypad = () => {};

  const handlePasswrod = () => {};

  return (
    <section>
      <article>
        <div>비밀번호를 입력해 주세요.</div>
        <input type="number" />
      </article>
      <article className=" flex flex-row gap-[40px]">
        <div
          className={cn("bg-[#DCDCDC] w-4 h-4 rounded-full", "bg-[#F76800]")}
        ></div>
        <div
          className={cn("bg-[#DCDCDC] w-4 h-4 rounded-full", "bg-[#F76800]")}
        ></div>
        <div
          className={cn("bg-[#DCDCDC] w-4 h-4 rounded-full", "bg-[#F76800]")}
        ></div>
        <div
          className={cn("bg-[#DCDCDC] w-4 h-4 rounded-full", "bg-[#F76800]")}
        ></div>
      </article>
    </section>
  );
};

export default Password;
