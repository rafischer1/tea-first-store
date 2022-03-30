import React, { createContext, useState } from "react";

// the user context value to access
export const ColorContext = createContext({
  color: "red",
  setColor: (val: string) => val,
});

// the component wrapper for providing context
export const ColorProvider = ({ children }: any) => {
  const [color, setColor] = useState("red");
  const value = { color, setColor };
  return (
    // @ts-ignore
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
