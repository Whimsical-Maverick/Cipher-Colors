import { colorPalette } from "../constants";

export default function ColorPalette({ onPick }) {
  return (
    <div className="color-palette">
      {colorPalette.map((color) => (
        <button
          key={color.name}
          type="button"
          className="color-btn"
          aria-label={`Pick ${color.name}`}
          style={{ backgroundColor: color.hex }}
          onClick={() => onPick(color.name)}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}
