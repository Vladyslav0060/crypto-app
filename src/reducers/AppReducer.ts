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

export interface ISymbols {
  id: string;
  symbol: string;
}
export type initStateType = {
  symbols: ISymbols[];
  isContactModalOpen: boolean;
  isLoggedIn: boolean;
};
export enum actionTypes {
  ADD_SYMBOLS = "ADD_SYMBOLS",
  SET_IS_CONTACT_MODAL_OPEN = "SET_IS_CONTACT_MODAL_OPEN",
  SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN",
}
type AppPayload = {
  [actionTypes.ADD_SYMBOLS]: ISymbols;
  [actionTypes.SET_IS_CONTACT_MODAL_OPEN]: boolean;
  [actionTypes.SET_IS_LOGGED_IN]: boolean;
};
export type AppActions = ActionMap<AppPayload>[keyof ActionMap<AppPayload>];
export const AppReducer = (state: initStateType, action: AppActions) => {
  console.log("Entered", action);
  switch (action.type) {
    case actionTypes.ADD_SYMBOLS:
      return { ...state, symbols: [...state.symbols, action.payload] };
    case actionTypes.SET_IS_CONTACT_MODAL_OPEN:
      return { ...state, isContactModalOpen: action.payload };
    case actionTypes.SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload };
  }
};
