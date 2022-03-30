import React, { createContext, useState } from "react";

export const ColorContext = createContext({
  color: "red",
  setColor: (val: string) => val,
});

export const ColorProvider = ({ children }: any) => {
  const [color, setColor] = useState("red");
  const value = { color, setColor };
  return (
    // @ts-ignore
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
