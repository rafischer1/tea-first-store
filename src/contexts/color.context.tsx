import React, { createContext, useState } from "react";

export const ColorContext = createContext({
  color: "red",
  setColor: (color: ColorName) => color,
});

export const ColorProvider = ({ children }: any) => {
  const [color, setColor] = useState("red");
  const value = { color, setColor };

  return (
    // @ts-ignore
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export type ColorName = "red" | "blue" | "white" | "black" | "orange" | "green";

export const colorNameMap: { [key: string]: string } = {
  red: "🔴",
  blue: "🔵",
  black: "⚫️",
  white: "⚪️",
  orange: "🔶",
  green: "❇️",
};
