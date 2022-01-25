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
export enum Types {
  SET_THEME = "SET_THEME",
}
type ThemePayload = {
  [Types.SET_THEME]: string;
};
export type ThemeActions =
  ActionMap<ThemePayload>[keyof ActionMap<ThemePayload>];

export const themeReducer = (state: any, action: ThemeActions) => {
  switch (action.type) {
    case Types.SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
