const PlanCard = ({ item, onClickPay }) => {

  return (
    <div
      className="bg-white rounded-xl p-4 my-4 shadow-xl shadow-blue-100 "
      onClick={() => {
        onClickPay(item.price);
      }}
    >
      {/* Badge */}
      <div className="bg-rose-600 py-1 px-3 rounded text-white text-[10px] font-bold w-fit">
        Exclusive
      </div>

      {/* Price & 5G */}
      <div className="flex items-center justify-between my-2">
        <div className="flex items-center text-[20px] font-bold text-slate-800">
          <div>₹{item.price}</div>
          <div className="ml-4 line-through text-slate-600">
            ₹{item.originalPrice}
          </div>
        </div>

        <div>
          <img src="/images/5g.svg" alt="5G" />
        </div>
      </div>

      {/* Plan Details */}
      <div className="flex items-center justify-between mt-3 text-[13px]">
        <div>
          <div className="text-slate-600">VALIDITY</div>
          <div className="text-slate-800 font-bold">{item.validity}</div>
        </div>

        <div>
          <div className="text-slate-600">DATA</div>
          <div className="text-slate-800 font-bold">{item.data}</div>
        </div>

        <div>
          <div className="text-slate-600">Voice</div>
          <div className="text-slate-800 font-bold">{item.voice}</div>
        </div>

        <div>
          <div className="text-slate-600">SMS</div>
          <div className="text-slate-800 font-bold">{item.sms}</div>
        </div>
      </div>

      {/* Subscription */}
      <div className="mt-4">
        <div className="text-purple-800 font-semibold text-[13px] mb-2">
          Subscription
        </div>

        <div className="flex gap-2 flex-wrap">
          {item.subscriptions.map((item, index) => {
            return <img src={item} key={index} alt="JioTV" className="w-8" />;
          })}
        </div>
      </div>

      {/* Button */}
      <div className="mt-5">
        <button
          onClick={() => {}}
          className="bg-phonepe py-2 w-full text-[13px] rounded-full font-bold text-white"
        >
          Recharge
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
