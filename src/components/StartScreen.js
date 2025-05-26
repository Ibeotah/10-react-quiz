import React from 'react'
import PropTypes from "prop-types";
export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className='start'>
      <h2>Welcome to the React Quiz</h2>
          <p>{numQuestions} question to test your React mastery</p>
          <button className='btn btn-ui' onClick={() => dispatch({type: "start"})}>Let's start</button>
    </div>
  );
}

StartScreen.propTypes = {
  numQuestions: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};
