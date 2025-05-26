import React from "react";
import PropTypes from "prop-types";

export default function NextButton({ answer, dispatch, index, numQuestions }) {
  if (answer === null) return;
 if(index < numQuestions - 1) return (
    <button onClick={() => dispatch({ type: "nextQuestion" })} className="btn btn-ui">NextButton</button>
  );
  if(index === numQuestions - 1)return (
    <button
      onClick={() => dispatch({ type: "Finished" })}
      className="btn btn-ui"
    >
      Finish
    </button>
  );
}

NextButton.propTypes = {
  answer: PropTypes.number,
  dispatch: PropTypes.func,
  index: PropTypes.number,
  numQuestions: PropTypes.number,
};
