import React, { createContext, useReducer, Dispatch } from "react";
import {
  TrashReducer,
  TrashActions,
  ITrashBox,
} from "../reducers/trashReducer";
import { initStateType } from "../reducers/trashReducer";
// export type initStateType = {
//   trashBoxes: ITrashBox[];
// };
const initState = {
  trashBoxes: [{ id: 12, name: "rubbish", weight: 54 }],
};
export const TrashContext = createContext<{
  state: initStateType;
  dispatch: Dispatch<TrashActions>;
}>({ state: initState, dispatch: () => null });
export const TrashProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(TrashReducer, initState);
  return (
    <TrashContext.Provider value={{ state, dispatch }}>
      {children}
    </TrashContext.Provider>
  );
};
