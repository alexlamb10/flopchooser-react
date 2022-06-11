import React from 'react'

function Answer({chosen, correct, incorrect}) {
  return (
    <div className="answer" hidden={chosen}>
      <button hidden={!chosen}>Play Again</button>
      <p hidden={!correct}>Correct!</p>
      <p hidden={!incorrect}>Incorrect!</p>
    </div>
  );
}

export default Answer