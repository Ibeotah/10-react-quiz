import React from "react";
import PropTypes from "prop-types";
import Options from "./Options";
export default function Question({ question, dispatch, answer }) {
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object,
  dispatch: PropTypes.func,
  answer: PropTypes.number
};
