import React, { createContext, useState } from "react";

export const ColorContext = createContext({
  color: "red",
  setColor: (color: ColorName) => color,
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
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export type ColorName =
  | "red"
  | "blue"
  | "white"
  | "black"
  | "orange"
  | "green"
  | "purple";

export const colorNameMap: { [key: string]: string } = {
  red: "🔴",
  blue: "🔵",
  black: "⚫️",
  white: "⚪️",
  orange: "🔶",
  green: "❇️",
  purple: "💜",
};
