import React, { useContext } from "react";
import { ColorContext, ColorName } from "../contexts/color.context";

const ColorContextSelect = () => {
  const { color, setColor } = useContext(ColorContext);
  const colors: ColorName[] = [
    "red",
    "blue",
    "white",
    "black",
    "orange",
    "green",
  ];
  const updateRedContext = (event: any) =>
    setColor(event.target.value as ColorName);

  return (
    <select
      onChange={updateRedContext}
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
};

export default ColorContextSelect;
