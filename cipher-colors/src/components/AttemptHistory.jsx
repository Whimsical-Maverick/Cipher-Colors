import AttemptRow from "./AttemptRow";

export default function AttemptHistory({ history }) {
  if (history.length === 0) return null;

  return (
    <div className="attempt-history">
      <p className="attempt-legend">🎯 Correct position · 🔄 Wrong position</p>
      <div className="attempt-list">
        {history.map((entry, index) => (
          <AttemptRow
            key={index}
            attemptNumber={index + 1}
            guess={entry.guess}
            feedback={entry.feedback}
          />
        ))}
      </div>
    </div>
  );
}
