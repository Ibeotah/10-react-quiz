import React from "react";
import PropTypes from "prop-types";
export default function Progress({
  numQuestions,
  index,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

Progress.propTypes = {
  numQuestions: PropTypes.number,
  index: PropTypes.number,
  points: PropTypes.number,
  maxPossiblePoints: PropTypes.number,
};
