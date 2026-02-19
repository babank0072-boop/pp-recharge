import { useEffect, useState } from "react";

export default function OfferCountdown() {
  const [timeLeft, setTimeLeft] = useState(11 * 60 + 48); // 11:48 in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // format mm:ss
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div>
      <div className="flex items-center justify-center py-1 px-4 mt-1 bg-white text-[13px]">
        <div className="text-slate-700 mr-2">Special Offer Ends In:</div>

        <div className="text-slate-700 flex items-center">
          {/* clock icon */}
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            className="mr-[2px] mt-[1px]"
            height="1em"
            width="1em"
          >
            <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
          </svg>

          <span>{minutes}:{seconds}</span>
        </div>
      </div>
    </div>
  );
}
