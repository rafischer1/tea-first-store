import { createContext, useState } from "react";

// the user context value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// the component wrapper for providing context
export const UserProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
