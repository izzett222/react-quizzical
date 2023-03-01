import classNames from "classnames";
import Answer from "./Answer";

export default function Question({ question, check, answerQuestion }) {
  const mixedAnswers = [
    question["correct_answer"],
    ...question["incorrect_answers"],
  ];
  const randomAnswers = mixedAnswers.sort();
  return (
    <div>
      <h1 className="font-bold text-[#293264]">{question.question}</h1>
      <div className="flex gap-2 flex-wrap mt-1">
        {randomAnswers.map((el, i) => {
          const picked = question.chosenAnswer === el;
          const correct = question.chosenAnswer === question["correct_answer"];
          const classes = classNames(
            {
              "bg-[#94D7A2]": check && picked && correct,
            },
            { "bg-[#F8BCBC]": check && picked && !correct },
            {
              "border-[#4d5b9e7e] text-[#29326477]":
                check && !picked && !correct,
            },
            { "border-[#4D5B9E] ": !check && !picked },
            { "border-[#4D5B9E] bg-[#D6DBF5]": !check && picked }
          );
          let styles =
            picked && correct
              ? "bg-[#94D7A2]"
              : picked && !correct
              ? "bg-[#F8BCBC]"
              : "border-[#4d5b9e7e] text-[#29326477]";
          if (!check) {
            styles = `border-[#4D5B9E] ${picked && "bg-[#D6DBF5]"}`;
          }
          return (
            <Answer
              key={i}
              disabled={check}
              click={answerQuestion}
              styles={classes}
            >
              {el}
            </Answer>
          );
        })}
      </div>
    </div>
  );
}
