import { FC } from "react";
import ICoin, { ICoinRequest } from "../components/pages/CoinList";
import styled from "styled-components";
const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;
`;
const CoinMainInfo = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;
const CoinImage = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 10px;
`;
const CoinH1 = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  width: 150px;
`;
const CoinSymbol = styled.p`
  text-transform: uppercase;
`;
const CoinPrice = styled.p`
  width: 110px;
`;
const CoinVolume = styled.p`
  width: 155px;
`;
const CoinData = styled.div`
  display: flex;
  text-align: right;
  justify-content: space-between;
  width: 100%;
`;
const Coin: FC<any> = ({ item }: any) => {
  return (
    <>
      <CoinContainer>
        <CoinRow>
          <CoinMainInfo>
            {/* <img src={item.image} alt="crypto" /> */}
            <CoinImage src={item.image} alt="crypto" />
            <CoinH1>{item.name}</CoinH1>
            <CoinSymbol>{item.symbol}</CoinSymbol>
          </CoinMainInfo>
          <CoinData>
            <CoinPrice>{item.current_price.toFixed(2)}$</CoinPrice>
            <CoinVolume>{item.total_volume}</CoinVolume>
            <p
              style={
                item.price_change_percentage_24h <= 0
                  ? { color: "red" }
                  : { color: "green" }
              }
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p>{item.market_cap}</p>
          </CoinData>
        </CoinRow>
      </CoinContainer>
    </>
  );
};
export default Coin;
