import React from "react";
import sucess from "../images/icon-success.svg";
const Success = ({ email }) => {
  return (
    <div className="flex flex-col items-center justify-between p-5  md:space-y-5 md:p-10  md:w-[26rem] w-full h-full md:h-auto  bg-white rounded-md  ">
      {/* Flex Container */}
      {/* Image */}
      <div
        className="flex flex-col items-start space-y-8 md:space-y-5 mt-32 md:mt-0
      "
      >
        <img src={sucess} alt="" />
        <h1 className="text-4xl font-bold w-[15rem] tracking-wide ">
          Thanks for subscribing!
        </h1>
        <p className="tracking-wide w-[20rem] md:w-auto">
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span> Please open it and click
          the button inside to confirm your subscription
        </p>
      </div>
      <button className="bg-darkSlateGrey text-white p-4 rounded-md hover:bg-gradient-to-r from-red to-tomato w-[22rem] font-bold">
        Dismiss message
      </button>
    </div>
  );
};

export default Success;
