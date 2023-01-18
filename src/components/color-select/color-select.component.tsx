import React, { useContext } from "react";
import { ColorContext, ColorName } from "../../contexts/color.context";

const colorsList: ColorName[] = [
  "red",
  "blue",
  "white",
  "black",
  "orange",
  "green",
  "purple",
  "teal",
];

function ColorContextSelect() {
  const { color, setColor } = useContext(ColorContext);
  const colors = colorsList;
  const updateColorContext = (event: any) =>
    setColor(event.target.value as ColorName);

  return (
    <select
      role="select"
      onChange={updateColorContext}
      style={{ marginLeft: 3, marginTop: 3 }}
      defaultValue={color}
    >
      {colors.map((c, i) => (
        <option key={i} value={c} disabled={c === color}>
          {c}
        </option>
      ))}
    </select>
  );
}

export default ColorContextSelect;
