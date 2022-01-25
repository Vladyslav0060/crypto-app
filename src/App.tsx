import "./App.css";
import { Navbar } from "./components/navbar";
import styled from "styled-components";
import Modal from "react-modal";
import ContactMe from "./components/pages/ContactMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./components/pages/HomePage";
import Exchange from "./components/pages/Exchange";
import CoinList from "./components/pages/CoinList";
import TestChart from "./components/pages/TestChart";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NotFound from "./components/pages/NotFound";
import FramerWrapper from "./components/wrapper/FramerWrapper";
import { AppContext } from "./context/AppContext";
import { useContext, useEffect } from "react";
import { actionTypes } from "./reducers/AppReducer";
const wrapComponent = ({ children }: any) => {
  return <FramerWrapper>{{ ...children }}</FramerWrapper>;
};
const App = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    if (localStorage.getItem("token"))
      dispatch({ type: actionTypes.SET_IS_LOGGED_IN, payload: true });
  }, []);
  Modal.setAppElement("#root");
  return (
    <Router>
      <Navbar />
      <ContactMe />
      <AnimatePresence>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/p1" element={<CoinList />} />
          <Route path="/p3" element={<TestChart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  ); //
};

export default App;
