import Image from "next/image";
import React from "react";

const CryptoItem = ({ ticker = "", name = "", quantity = 0 }) => {
  return (
    <section
      className=" shadow border-1 border-[#EBEEF1] rounded-[8px] p-[12px]
      flex flex-row items-center justify-between cursor-pointer 
    "
    >
      <div className="flex flex-row gap-[12px]">
        <div>
          <Image
            alt="ticker"
            src={`/${ticker}.png`}
            width={40}
            height={40}
            priority
          />
        </div>
        <div>
          <div>{name}</div>
          <div className=" text-[13px] text-[#969696]">보유 수량</div>
        </div>
      </div>
      <div className=" text-[13px] text-[#969696]">
        {quantity} {ticker}
      </div>
    </section>
  );
};

export default CryptoItem;
