// import { initStateType } from "../context/TrashContext.tsx";
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface ITrashBox {
  id: number;
  name: string;
  weight: number;
}
export type initStateType = {
  trashBoxes: ITrashBox[];
};
export enum actionTypes {
  ADD_TRASHBOX = "ADD_TRASHBOX",
}
type TrashPayload = {
  [actionTypes.ADD_TRASHBOX]: ITrashBox;
};
export type TrashActions =
  ActionMap<TrashPayload>[keyof ActionMap<TrashPayload>];
export const TrashReducer = (state: initStateType, action: TrashActions) => {
  switch (action.type) {
    case actionTypes.ADD_TRASHBOX:
      return { ...state, trashBoxes: [...state.trashBoxes, action.payload] };
  }
};
