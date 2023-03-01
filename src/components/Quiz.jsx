import { useEffect, useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [check, setCheck] = useState(false);
  const correctlyAnswered = quiz.filter(
    (el) => el["correct_answer"] === el.chosenAnswer
  );

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results.map((el) => ({
          ...el,
          chosenAnswer: null,
        }));
        setQuiz(newData);
      });
  }, []);
  function checkAnswer() {
    setCheck(true);
  }
  function answerQuestion(index) {
    return (answer) =>
      setQuiz((oldQuiz) => {
        return oldQuiz.map((el, i) =>
          index === i ? { ...el, chosenAnswer: answer } : { ...el }
        );
      });
  }
  function reset() {
    setQuiz([]);
    setCheck(false);
    fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = data.results.map((el) => ({
          ...el,
          chosenAnswer: null,
        }));
        setQuiz(newData);
      });
  }
  return (
    quiz.length && (
      <div className="z-10 h-full w-full px-10 pt-10">
        <div className="flex flex-col gap-4">
          {quiz.map((el, i) => (
            <Question
              question={el}
              key={i}
              answerQuestion={answerQuestion(i)}
              check={check}
            />
          ))}
        </div>
        {!check && (
          <div className="flex justify-center">
            <button
              onClick={checkAnswer}
              className="bg-[#4D5B9E] text-white px-12 rounded-[15px] py-3 mt-4"
            >
              check answers
            </button>
          </div>
        )}
        {check && (
          <div className="flex gap-8 justify-center items-center mt-4">
            <p>
              You scored {correctlyAnswered.length}/{quiz.length} correct
              answers
            </p>
            <button
              onClick={reset}
              className="bg-[#4D5B9E] text-white px-12 rounded-[15px] pt-1.5 pb-2"
            >
              play gain
            </button>
          </div>
        )}
      </div>
    )
  );
}
