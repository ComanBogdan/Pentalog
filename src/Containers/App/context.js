import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [path, setPath] = useState("/cryptocurrencies");
  const [id, setId] = useState();

  return (
    <AppContext.Provider value={{ path, setPath, id, setId }}>
      {children}
    </AppContext.Provider>
  );
}