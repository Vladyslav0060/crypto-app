import React, { createContext, useReducer, Dispatch } from "react";
import { themeReducer, ThemeActions } from "../reducers/themeReducer";
type initStateType = {
  theme: string;
};
const initState = {
  theme: "light",
};
const ThemeContext = createContext<{
  state: initStateType;
  dispatch: Dispatch<ThemeActions>;
}>({ state: initState, dispatch: () => null });

const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider, ThemeContext };
