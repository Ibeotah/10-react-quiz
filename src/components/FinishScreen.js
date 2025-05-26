import React from "react";
import PropTypes from "prop-types";
export default function FinishScreen({ maxPossiblePoints, points, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  switch (true) {
    case percentage === 100:
      emoji = "🥇";
      break;
    case percentage >= 80 && percentage < 100:
      emoji = "🎉";
      break;
    case percentage >= 50 && percentage < 80:
      emoji = "👍";
      break;
    case percentage >= 0 && percentage < 50:
      emoji = "🤔";
      break;
    case percentage === 0:
      emoji = "🤦‍♂️";
      break;
    default:
      emoji = "❓";
  }
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart quiz
      </button>
    </>
  );
}

FinishScreen.propTypes = {
  maxPossiblePoints: PropTypes.number,
  points: PropTypes.number,
  highScore: PropTypes.number,
  dispatch: PropTypes.func
};
