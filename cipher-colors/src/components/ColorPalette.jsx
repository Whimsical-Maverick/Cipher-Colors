import { colorPalette } from "../constants";

export default function ColorPalette({ onPick, disabled = false }) {
  return (
    <div className="color-palette">
      {colorPalette.map((color) => (
        <button
          key={color.name}
          type="button"
          className="color-btn"
          title={color.name}
          aria-label={`Pick ${color.name}`}
          disabled={disabled}
          style={{
            backgroundColor: color.hex,
            "--btn-color": color.hex,
          }}
          onClick={() => onPick(color.name)}
        />
      ))
      }
    </div>
  );
}
