import React from "react";

const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" max-w-[375px] w-full mx-auto border-1 h-[100vh] p-[20px]">
      {children}
    </div>
  );
};

export default MobileLayout;
