import { FC, useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { RiseOutlined, FallOutlined } from "@ant-design/icons";
import { DeviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Coin from "../Coin";
import Footer from "../footer/Footer";
import FramerWrapper from "../wrapper/FramerWrapper";
import * as dotenv from "dotenv";
let firstName = "bitcoin",
  secondName = "ethereum";
let firstPrice = 0,
  secondPrice = 0;
let filtered: ICoinRequest[] = [];
const TextField = styled.input`
  // background-color: "white";
  // border-radius: 5px;
  border-radius: 3px;
  background: white;
  border: none;
  padding: 0;
`;
const columns: any = [
  {
    title: "Name",
    dataIndex: ["image", "name"],
    sorter: (a: any, b: any) => b.name > a.name,
    render: (t: any, r: any) => (
      <div>
        <img style={{ width: "2rem" }} src={`${r.image}`} />
        <span style={{ marginLeft: "10px", fontSize: "1.2rem" }}>{r.name}</span>
        <span style={{ color: "grey" }}>({r.symbol.toUpperCase()})</span>
      </div>
    ),
  },
  {
    title: "MarCap",
    dataIndex: "market_cap",
    responsive: ["md"],
    render: (item: number) => {
      return Math.abs(Number(item)) >= 1.0e9
        ? (Math.abs(Number(item)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(item)) >= 1.0e6
        ? (Math.abs(Number(item)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(item)) >= 1.0e3
        ? (Math.abs(Number(item)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(item));
    },
  },
  {
    title: "Vol24",
    dataIndex: "total_volume",
    responsive: ["lg"],
    render: (item: number) => {
      return Math.abs(Number(item)) >= 1.0e9
        ? (Math.abs(Number(item)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(item)) >= 1.0e6
        ? (Math.abs(Number(item)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(item)) >= 1.0e3
        ? (Math.abs(Number(item)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(item));
    },
  },
  {
    title: "Price",
    dataIndex: "current_price",
    render: (item: number) => item.toFixed(2) + "$",
  },
  {
    title: "24h",
    dataIndex: "price_change_percentage_24h",
    render: (item: number) => (
      <>
        {item > 0 ? (
          <RiseOutlined style={{ fontSize: "1.3rem", color: "green" }} />
        ) : (
          <FallOutlined style={{ fontSize: "1.3rem", color: "red" }} />
        )}
        <span style={item >= 0 ? { color: "green" } : { color: "red" }}>
          {item.toFixed(2)}%
        </span>
      </>
    ),
  },
];

export interface ICoinRequest {
  id: string;
  name: string;
  symbol: string;
  total_volume: number;
  market_cap: number;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
}
// let responseData: any[] = [];

const CoinList: FC = () => {
  const [fetchedData, setFetchedData] = useState<ICoinRequest[]>([]);
  const [searchField, setSearchField] = useState<string>("");
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  useEffect(() => {
    request(process.env.REACT_APP_COINMARKET_URL);
    let timer = setInterval(() => {
      console.log("new req");
      request(process.env.REACT_APP_COINMARKET_URL);
    }, 20000);
    return () => clearInterval(timer);
  }, []);
  const request = async (url: string | undefined) => {
    if (url != undefined) {
      // const response = await axios.get(url);
      // const response = await axios.get("http://localhost:5000/coin/assets");
      const response = await axios.get(
        "https://evening-island-58892.herokuapp.com/coin/assets"
      );
      console.log(response.data);
      // console.log(response.data);
      // response.data.map((item: ICoinRequest) => {
      //   if (item.id === firstName) firstPrice = item.current_price;
      //   else if (item.id === secondName) secondPrice = item.current_price;
      // });
      // if (firstPrice != 0 && secondPrice != 0)
      //   console.log("Result of converting: ", firstPrice / secondPrice);
      setFetchedData(response.data);
    }
  };

  const handleChange = (e: any) => {
    setSearchField(e.target.value);
  };

  return (
    <FramerWrapper>
      <div className="coinlist-wrapper" style={{ backgroundColor: "black" }}>
        <div
          style={
            isMobile
              ? {}
              : {
                  marginLeft: "15%",
                  marginRight: "15%",
                  padding: "10px",
                  height: "100%",
                  // backgroundColor: "transparent",
                }
          }
        >
          {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
          <Table
            // className="custom-table"
            title={() => (
              // <input placeholder="Search" onChange={handleChange}
              <TextField onChange={handleChange} />
            )}
            loading={fetchedData.length ? false : true}
            columns={columns}
            sortDirections={["descend"]}
            dataSource={
              searchField === ""
                ? fetchedData
                : fetchedData.filter((coin) =>
                    coin.name.toLowerCase().includes(searchField.toLowerCase())
                  )
            }
            rowKey="name"
          />
        </div>
      </div>
    </FramerWrapper>
  );
};
export default CoinList;
