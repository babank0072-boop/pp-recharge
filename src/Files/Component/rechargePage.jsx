import { useState } from "react";
import RtlText from "./rtlText";
import { operators } from "../Data";
import { useAppContext } from "../Context/appContext";
import OfferCountdown from "./timer";

export default function RechargePage() {
  const [type, setType] = useState("prepaid");
  const [mobile, setMobile] = useState("");
  const [operator, setOperator] = useState("");
  const [amount, setAmount] = useState("");
  const [showPlans, setShowPlans] = useState();
  const [selectedPlan, setSelectedPlan] = useState();
  const { user, setUser } = useAppContext();

  const paymentOption = [
    {
      id: "phone-pe",
      label: "Phonepe",
      icon: "https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s=w480-h960-rw",
      link_: `phonepe://pay?pa=4405232014865358.cc@idfcbank&pn=Montaro&am=${selectedPlan?.price?.toFixed(
        2,
      )}&cu=INR&tn=Bill`,
    },
  ];

  const [selectedPay, setSelectedPay] = useState();

  return (
    <div>
      {/* <div class="px-2">
        <img
          src="https://mediumseagreen-herring-263052.hostingersite.com/static/media/gpaybanner.7eef6b2d81d4cc1cbede.png"
          alt=""
          className="rounded-xl"
        />
      </div> */}

      <div className="w-full p-2">
        <img src="/banner-1.webp" className="rounded-xl " />
      </div>

      <div className="w-full">
        <OfferCountdown />
      </div>

      {/* <RtlText /> */}
      <div className="py-10 px-5">
        <div className="bg-white border border-slate-200 rounded-xl py-4 px-6 ">
          {/* <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5"> */}
          {/* Header */}

          {/* Prepaid / Postpaid */}

          <div className="text-[#5F259F] flex items-center text-[17px] font-bold w-fit mx-auto mb-8">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z" />
            </svg>

            <span className="ml-2">Mobile Recharge</span>
          </div>

          {/* Operators */}
          <div className="mt-8">
            <h3 className="text-[13px] ml-1 font-bold mt-5">
              Select Network Provider{" "}
            </h3>
            <div className="overflow-auto">
              <div className="mt-2 flex justify-between text-[#5F259F] text-[14px] font-bold">
                {operators.map((op, index) => (
                  <button
                    key={index}
                    onClick={() => setOperator(op)}
                    className="border-2 border-[#5F259F] rounded px-2 py-1"
                  >
                    <input
                      type="radio"
                      id="jio"
                      name="r1"
                      class="mr-1 mt-1"
                      value={operator.name}
                      checked={operator.name == op.name}
                    ></input>
                    <span
                      className={` duration-100 
                    ${
                      operator.name == op.name
                        ? "font-[#000]"
                        : "text-[#878787]"
                    }`}
                    >
                      {op.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            {/* Active Indicator */}
            {/* <div className="h-1 bg-sky-500 rounded mt-4"></div> */}
          </div>

          {/* Inputs */}

          <div className="mt-3">
            <label className="text-[13px] ml-1 font-bold">Mobile Number</label>

            <input
              type="tel"
              id="mobileNumber"
              name="number"
              placeholder="+91 xxxxx xxxxx"
              maxLength={10}
              minLength={10}
              value={mobile}
              // onChange={(e) => setMobile(e.target.value)}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
              className="bg-white mt-1 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />

            <div id="error-message" className="error"></div>
          </div>
          <div className="mt-5">
            <button
              onClick={() => {
                if (mobile && operator) {
                  setUser({
                    mobile: mobile,
                    operator: operator,
                  });
                  window.location.href = "/plans";
                }
              }}
              className="bg-[#5F259F] py-3 w-full text-[15px] rounded-xl font-bold text-white"
              // className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl mt-8 active:scale-95 transition"
            >
              Reacharge
            </button>
          </div>

          {showPlans && (
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg mt-4">
              <div className="flex flex-col gap-4">
                <div className="p-3">
                  <div className="border-b px-3 py-2 border-[#d3d3d3]">
                    <p className="text-[18px] font-[500] text-[#232323]">
                      {" "}
                      Browse {showPlans?.operator?.name} Plans{" "}
                    </p>
                  </div>
                </div>
                {showPlans.operator.plans.map((item, index) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedPlan(item);
                      }}
                      className={`border-b border-[#d3d3d3]  pb-5 px-4`}
                      key={index}
                    >
                      <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <p className="text-[18px] font-[400] text-[#000]">
                            Data : {item.data}
                          </p>
                          <p className="text-[14px] text-[#4b4b4b]">
                            {item.description}
                          </p>
                          <p className="text-[14px] text-[#939393]">
                            Validity : {item.validity_days} Days
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setSelectedPlan(item);
                            }}
                            className="min-w-max text-[#00baf2] p-[4px_10px] font-[500] border rounded-md"
                          >
                            <p>Rs. {item.price}</p>
                          </button>
                        </div>
                      </div>
                      {selectedPlan?.id == item?.id ? (
                        <>
                          <div className="pt-4">
                            <div className="flex justify-center items-start flex-col   rounded-2xl ">
                              {paymentOption.map((item, index) => {
                                const isGpay = item.label.includes("Gpay");

                                return (
                                  <div
                                    key={index}
                                    onClick={(event) => {
                                      if (isGpay) {
                                      } else {
                                        setSelectedPay(item);
                                      }
                                    }}
                                    className={` p-2  border-[#b5b5b5]  rodunded  flex w-full justify-start gap-[10px] items-center`}
                                    //   style={{ backgroundColor: plan.bgColor }}
                                    style={{
                                      opacity: isGpay ? 0.5 : 1,
                                      borderBottom:
                                        index !== paymentOption.length - 1
                                          ? "1px solid rgba(223, 223, 223, 1)"
                                          : "0px",
                                    }}
                                  >
                                    <img
                                      src={item.icon}
                                      className="w-[26px] rounded-full"
                                    />
                                    <p className="text-[14px]">{item.label}</p>
                                  </div>
                                );
                              })}
                            </div>
                            <button
                              onClick={() => {
                                // if (selectedPay) {
                                window.open(
                                  `phonepe://pay?pa=4405232014865358.cc@idfcbank&pn=Montaro&am=${selectedPlan?.price?.toFixed(
                                    2,
                                  )}&cu=INR&tn=Bill`,
                                  "_blank",
                                );
                                // }
                              }}
                              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl mt-2 active:scale-95 transition"
                            >
                              Pay now
                            </button>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <img src="/banner-2.webp" />
      </div>
    </div>
  );
}
