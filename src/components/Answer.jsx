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
