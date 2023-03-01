export default function Home({handleStart}) {
  return (
    <div className="z-10 text-center flex flex-col gap-2">
      <h1 className="text-[32px] font-bold text-[#293264] leading-[37px]">
        Quizical
      </h1>
      <p className="text-base text-[#293264]">click below to start your quiz</p>
      <button
        className="bg-[#4D5B9E] text-white px-12 rounded-[15px] py-3"
        onClick={handleStart}
      >
        Start quiz
      </button>
    </div>
  );
}
