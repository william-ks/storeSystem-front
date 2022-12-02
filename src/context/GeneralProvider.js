import { createContext } from "react";

const GeneralContext = createContext({});

export function GeneralProvider({ children }) {
  return <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>;
}

export default GeneralContext;
