import React, { useState } from "react";
import mobImage from "../images/illustration-sign-up-mobile.svg";
import desImage from "../images/illustration-sign-up-desktop.svg";
import list from "../images/icon-list.svg";

const Main = ({ onSubmit, errorMessage, errorStatus }) => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };
  const changeHandler = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  return (
    <div className=" bg-white rounded-md h-full md:h-auto md:w-[60rem] w-full ">
      {/* Flex Container */}
      {
        <div className="flex flex-col items-left-justify-center md:flex-row-reverse">
          {/* Image */}
          <div className="md:p-4">
            <img src={mobImage} className="w-full md:hidden" alt="" />
            <img src={desImage} className="w-full hidden md:block" alt="" />
          </div>
          {/* Contents */}
          <div className="flex flex-col items-start justify-center space-y-4 md:p-10 pt-10 pl-8 pr-10">
            <h1 className="text-5xl md:text-5xl text-darkSlateGrey font-bold">
              Stay updated
            </h1>
            <p className="tracking-wide">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            {/* list1 */}
            <div className="flex flex-row items-center space-x-2">
              <img src={list} alt="" />
              <p className="tracking-wide">
                Product discovery and building what matters
              </p>
            </div>
            {/* list 2 */}
            <div className="flex flex-row items-center space-x-2">
              <img src={list} alt="" />
              <p className="tracking-wide">
                Measuring to ensure updates are a success
              </p>
            </div>
            {/* list 2 */}
            <div className="flex flex-row items-center space-x-3">
              <img src={list} alt="" />
              <p className="tracking-wide">And much more!</p>
            </div>
            <form action="#" className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between items-center p-2 mt-10">
                <h4 className="text-xs font-bold  "> Email address</h4>
                <p className="text-xs italic text-red">{errorMessage}</p>
              </div>
              <input
                onChange={changeHandler}
                type="text"
                value={email}
                id="inputEmail"
                className="w-full p-3 md:p-4 border-grey border mb-5 rounded-md focus:outline-darkSlateGrey "
                placeholder="email@company.com"
                required
              />
              <button
                className="w-full p-4 md:p-4 bg-darkSlateGrey text-white font-bold rounded-md hover:bg-gradient-to-r from-red to-tomato"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default Main;
