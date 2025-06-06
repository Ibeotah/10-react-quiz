import React from "react";
import PropTypes from "prop-types";
export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            
            (hasAnswered &&
              (index === question.correctOption ? "correct" : "wrong")) ||
            ""
          }`}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index
            
            })
          }
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

Options.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.number,
};
