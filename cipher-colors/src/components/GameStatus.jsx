import { colorPalette } from "../constants";

export default function GameStatus({ status, attemptsUsed, secret, onRestart }) {
  if (status === "playing") return null;

  const isWon = status === "Won";

  return (
    <div className={`game-status ${isWon ? "won" : "lost"}`}>
      {isWon ? (
        <p className="status-message">
          You cracked it in {attemptsUsed}{" "}
          {attemptsUsed === 1 ? "attempt" : "attempts"}! 🎉
        </p>
      ) : (
        <>
          <p className="status-message">Out of attempts! The secret was:</p>
          <div className="secret-reveal">
            {secret.map((colorName, index) => {
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
        </>
      )}

      <button type="button" className="submit-btn" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}
