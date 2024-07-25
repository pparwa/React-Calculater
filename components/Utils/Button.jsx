
import './Button.css'
export default function Button({ type, text, handelnumber }) {
  return (
    <input
      className={type == "number" ? "btn numberBtn " : "btn oppBtn"}
      style={text === "0" ? { gridColumn: "1 / span 3" } : {}}
      value={text}
      type="button"
      onClick={(event) =>handelnumber(event.target.value)}
    />
  );
}
