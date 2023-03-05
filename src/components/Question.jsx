import classNames from "classnames";
import Answer from "./Answer";

export default function Question({ question, check, answerQuestion }) {
  return (
    <div>
      <h1 className="font-bold text-[#293264]">{question.question}</h1>
      <div className="flex gap-2 flex-wrap mt-1">
        {question.randomAnswers.map((element, index) => {
          const picked = question.chosenAnswer === element;
          const correct = element === question["correct_answer"];
          const classes = classNames({
            "bg-[#94D7A2]": check && correct,
            "bg-[#F8BCBC]": check && picked && !correct,
            "border-[#4d5b9e7e] text-[#29326477]": check && !picked && !correct,
            "border-[#4D5B9E] ": !check && !picked,
            "border-[#4D5B9E] bg-[#D6DBF5]": !check && picked,
          });
          return (
            <Answer
              key={index}
              disabled={check}
              click={answerQuestion}
              styles={classes}
            >
              {element}
            </Answer>
          );
        })}
        {check && !question.chosenAnswer && (
          <div className="text-[#8f3c3c] font-medium">not answer</div>
        )}
      </div>
    </div>
  );
}
