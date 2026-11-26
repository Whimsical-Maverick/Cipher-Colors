import { colorPalette } from "../constants";

export default function AttemptRow({ attemptNumber, guess, feedback }) {
  return (
    <div className="attempt-row">
      <span className="attempt-num">#{attemptNumber}</span>

      <div className="attempt-pegs">
        {guess.map((colorName, index) => {
          const colorObj = colorPalette.find((c) => c.name === colorName);
          return (
            <span
              key={index}
              className="attempt-peg"
              title={colorName}
              aria-label={colorName}
              style={{ backgroundColor: colorObj?.hex }}
            />
          );
        })}
      </div>

      <div className="attempt-feedback">
        <span title="Correct position">🎯 {feedback.correctPosition}</span>
        <span title="Wrong position">🔄 {feedback.wrongPosition}</span>
      </div>
    </div>
  );
}
