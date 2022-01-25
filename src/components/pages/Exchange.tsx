import { FC, useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { Dropdown, Menu, Spin } from "antd";
import Modal from "../exchange-components/Modal";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoadingOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import FramerWrapper from "../wrapper/FramerWrapper";
// let [symbols, setSymbols]: any = [];
const antLoadingIcon = <LoadingOutlined style={{ color: "white" }} spin />;
const Exchange: FC = () => {
  let isInitial = true;
  let [symbolDropdownMenu, setSymbolDropdownMenu]: any = useState();
  const [modalsOpened, setModalsOpened] = useState({
    first: false,
    second: false,
  });
  const [firstSymbol, setFirstSymbol]: any = useState();
  const [secondSymbol, setSecondSymbol]: any = useState();
  const [response, setResponse]: any = useState();
  const [symbols, setSymbols]: any = useState();
  const [amount, setAmount]: any = useState(1);
  const [isRotating, setIsRotating]: any = useState();
  const [isLoading, setIsLoading]: any = useState(true);
  const onSymbolsClick = (e: any) => {
    console.log(e);
  };
  useEffect(() => {
    console.log("ENTERED", symbols);
    setSymbolDropdownMenu(
      <Menu
        style={{
          height: "400px",
          overflowY: "scroll",
          width: "300px",
          columns: "5",
        }}
        onClick={onSymbolsClick}
      >
        {symbols?.map((el: any) => (
          <Menu.Item key={el}>{el}</Menu.Item>
        ))}
      </Menu>
    );
  }, [symbols]);

  const request = async () => {
    console.log("request");
    const result = await axios(
      "https://evening-island-58892.herokuapp.com/coin/assetsExchange"
    );
    if (result.status === 200) setIsLoading(false);
    setResponse(result.data);
    if (isInitial) {
      setFirstSymbol(result.data[0]);
      setSecondSymbol(result.data[1]);
      const temp = result?.data?.map((el: any) => el.symbol);
      setSymbols(temp);
    }
    isInitial = false;
  };
  useEffect(() => {
    const interval = setInterval(() => request(), 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (firstSymbol === undefined || secondSymbol === undefined) return;
    console.log(firstSymbol);
    console.log(firstSymbol?.price / secondSymbol?.price);
  }, [firstSymbol, secondSymbol]);
  const roundNumber = () => {
    let testNum = (amount * firstSymbol?.price) / secondSymbol?.price;
    const firstpart = testNum.toString().split(".")[0];
    console.log("FP", firstpart[0]);
    switch (firstpart[0]) {
      case "0":
        return ((amount * firstSymbol?.price) / secondSymbol?.price).toFixed(7);
      default:
        return ((amount * firstSymbol?.price) / secondSymbol?.price).toFixed(3);
    }
    return (amount * firstSymbol?.price) / secondSymbol?.price;
  };
  const switchCoins = () => {
    setIsRotating(true);
    const buf = firstSymbol;
    setFirstSymbol(secondSymbol);
    setSecondSymbol(buf);
    setTimeout(() => setIsRotating(false), 250);
  };
  function template({ rotate, x }: any) {
    return `rotate(${rotate}) translateX(${x})`;
  }
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  };
  return (
    <FramerWrapper>
      <div className="exchange-wrapper">
        {isLoading ? (
          <div
            className="exchange-form"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="large" indicator={antLoadingIcon} />
          </div>
        ) : (
          <motion.div
            // exit={{ opacity: 0 }}
            // animate={{ opacity: 2 }}
            // initial={{ opacity: 0.5 }}
            // transformTemplate={template}
            // animate={{ rotate: 360 }}
            // style={{ rotate: 0, x: "calc(10vh - 100px)" }}
            transition={spring}
            animate={{ scale: 0.95 }}
          >
            <div className="exchange-form">
              {/* <Spin className="exchange-form" spinning={isLoading} indicator={antLoadingIcon}> */}
              <div className="exchange-col">
                <Modal
                  opened={modalsOpened.first}
                  setOpened={setModalsOpened}
                  nModal={1}
                  symbols={response}
                  currentSymbol={firstSymbol}
                  setCurrentSymbol={setFirstSymbol}
                />
                <button
                  onClick={() =>
                    setModalsOpened((prevState) => ({
                      ...prevState,
                      first: !modalsOpened.first,
                    }))
                  }
                >
                  {firstSymbol?.id.toUpperCase() +
                    "(" +
                    firstSymbol?.symbol.toUpperCase() +
                    ") ▼"}
                </button>
                {/* <Spin style={{ width: "15vw", height: "15vw", marginTop: "10px" }} /> */}
                <img
                  src={firstSymbol?.image}
                  style={{ width: "15vw", height: "15vw" }}
                />
                {/* -------------------------------------------- */}
              </div>
              <div className="exchange-col">
                <input
                  type="number"
                  onChange={(e) => {
                    if (parseFloat(e.target.value) >= 0)
                      setAmount(e.target.value);
                    else if (e.target.value === "") setAmount(0);
                    return;
                  }}
                  value={amount}
                  style={{ width: "50%", color: "white" }}
                />
                <FontAwesomeIcon
                  className={isRotating ? "faSyncAlt-active" : "faSyncAlt"}
                  icon={faSyncAlt}
                  size="6x"
                  color="black"
                  onClick={switchCoins}
                  style={{ width: "15vw", cursor: "pointer" }}
                />
                {/* <h1>{(amount * firstSymbol?.price) / secondSymbol?.price}</h1> */}
                <input
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                  value={roundNumber()}
                  style={{ width: "50%", color: "white" }}
                />
              </div>
              <div className="exchange-col">
                <Modal
                  opened={modalsOpened.second}
                  setOpened={setModalsOpened}
                  nModal={2}
                  symbols={response}
                  currentSymbol={secondSymbol}
                  setCurrentSymbol={setSecondSymbol}
                />
                <button
                  onClick={() =>
                    setModalsOpened((prevState) => ({
                      ...prevState,
                      second: !modalsOpened.second,
                    }))
                  }
                >
                  {secondSymbol?.id.toUpperCase() +
                    "(" +
                    secondSymbol?.symbol.toUpperCase() +
                    ") ▼"}
                </button>
                <img
                  src={secondSymbol?.image}
                  style={{ width: "15vw", height: "15vw" }}
                />
              </div>
              {/* </Spin> */}
            </div>
          </motion.div>
        )}
      </div>
    </FramerWrapper>
  );
};
export default Exchange;
