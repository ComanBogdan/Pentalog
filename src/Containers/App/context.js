import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
 
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  );
}