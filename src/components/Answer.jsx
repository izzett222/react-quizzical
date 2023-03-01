export function Ans({ correct, text, click, picked, check }) {
  return check ? (
    <button
      disabled={check}
      className={`border   ${
        picked && correct
          ? "bg-[#94D7A2]"
          : picked && !correct
          ? "bg-[#F8BCBC]"
          : "border-[#4d5b9e7e] text-[#29326477]"
      } px-5 py-1 rounded-[8px] font-medium text-xs`}
    >
      {text}
    </button>
  ) : (
    <button
      onClick={() => click(text)}
      className={`border border-[#4D5B9E] ${
        picked && "bg-[#D6DBF5]"
      } px-5 py-1 rounded-[8px] font-medium text-xs`}
    >
      {text}
    </button>
  );
}
export default function Answer({ styles, disabled, children, click }) {
  return (
    <button
      disabled={disabled}
      onClick={() => click(children)}
      className={`border px-5 py-1 rounded-[8px] font-medium text-xs ${styles}`}
    >
      {children}
    </button>
  );
}
