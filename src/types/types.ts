export interface IFetchedData {
  id: number;
  name: string;
  color: string;
}
export interface IAccessibility {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
