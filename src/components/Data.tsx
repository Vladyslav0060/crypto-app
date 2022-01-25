import { FC } from "react";
import { IFetchedData } from "../types/types";

const Data: FC<IFetchedData> = (props) => {
  return <div>TEST {console.log(props)}</div>;
};
export default Data;
