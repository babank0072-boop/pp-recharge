export default function BlinkingSale() {
  return (
    <div className="flex items-center justify-center h-13 bg-gray-300" style={{
      background:"linear-gradient(45deg, #e56400, #3b9900)"
    }}>
      <h1 className="text-2xl font-bold animate-[blink_1s_infinite]">
        End of Year Sale
      </h1>

      <style>
        {`
          @keyframes blink {
            0%, 100% {
              color: white;
            }
            50% {
              color: black;
            }
          }
        `}
      </style>
    </div>
  );
}
