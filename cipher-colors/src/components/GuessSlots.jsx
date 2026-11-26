import { colorPalette, CODE_LENGTH } from "../constants";

export default function GuessSlots({ currGuess }) {
  return (
    <div className="guess-slots">
      {Array.from({ length: CODE_LENGTH }).map((_, index) => {
        const colorName = currGuess[index];
        const colorObj = colorPalette.find((c) => c.name === colorName);

        return (
          <div
            key={index}
            className={`guess-slot ${colorObj ? "filled" : "empty"}`}
            style={colorObj ? { backgroundColor: colorObj.hex } : undefined}
            aria-label={colorObj ? colorObj.name : `Empty slot ${index + 1}`}
          />
        );
      })}
    </div>
  );
}
