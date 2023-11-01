import React, { createContext, useState } from "react";
import { ColorName, colorNameMap } from "../shared/colorContextDef";
export const ColorContext = createContext({
  color: "red",
  setColor: (color: ColorName): ColorName => color,
});
export const ColorProvider = ({ children }: any) => {
  let initialValue = "red";
  const initialValueFromLocalStorage =
    window.localStorage.getItem("color") ?? null;
  if (initialValueFromLocalStorage)
    // split to access ColorName from -> "color: icon"
    initialValue = initialValueFromLocalStorage.split(":")[0];
  const [color, setColor] = useState(initialValue);
  const value = { color, setColor };
  window.localStorage.setItem(
    "color",
    `${value.color}: ${colorNameMap[value.color]}`
  );

  return (
    // @ts-ignore
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};
