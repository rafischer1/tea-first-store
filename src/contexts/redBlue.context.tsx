import React, { createContext, useState } from "react";

// the user context value to access
export const RedContext = createContext({
  red: "red",
  setRed: (val: string) => val,
});

// the component wrapper for providing context
export const RedProvider = ({ children }: any) => {
  const [red, setRed] = useState("red");
  const value = { red, setRed };

  // @ts-ignore
  return <RedContext.Provider value={value}>{children}</RedContext.Provider>;
};
