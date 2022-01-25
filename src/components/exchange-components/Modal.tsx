import { FC, useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { actionTypes } from "../../reducers/AppReducer";
import Modal from "react-modal";
import axios from "axios";
import { DeviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { REGEXP_EMAIL } from "../regexp/Regexp";
import { Form, Input, Button } from "antd";

interface Props {
  opened: boolean;
  nModal: number;
  symbols: any;
  currentSymbol: any;
  setCurrentSymbol: any;
  setOpened: React.Dispatch<
    React.SetStateAction<{
      first: boolean;
      second: boolean;
    }>
  >;
}

const ContactMe: FC<Props> = (props: Props): any => {
  const closeModal = () => {
    props.setOpened((prevState) =>
      props.nModal === 1
        ? { ...prevState, first: !props.opened }
        : { ...prevState, second: !props.opened }
    );
  };

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
  const onFinish = async (e: any) => {
    console.log("onfininsh worked", e);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#000000a1",
      width: isMobile ? "300px" : "600px",
      border: 0,
    },
    overlay: { zIndex: 1000, backgroundColor: "#4c4c4cbf" },
  };
  const onSubmit = (e: any) => {
    const symbol = e.target.innerHTML.split(" ")[0].toLowerCase();
    console.log(symbol);
    props.symbols.forEach((el: any) => {
      if (el.symbol === symbol) {
        console.log("SUCCESS");
        props.setCurrentSymbol(el);
      }
    });
    // props.setCurrentSymbol(e.target.innerHTML);
    props.setOpened((prevState) =>
      props.nModal === 1
        ? { ...prevState, first: !props.opened }
        : { ...prevState, second: !props.opened }
    );
  };
  return (
    <Modal
      isOpen={props.opened}
      style={customStyles}
      contentLabel="Example Modal"
      onRequestClose={closeModal}
    >
      {/* <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item>
          <h2 className="form-item">
            {props?.nModal === 1 ? <span>From:</span> : <span>To:</span>}
          </h2>
        </Form.Item>

        <Form.Item> */}
      <h2 className="modal-title">
        {props.nModal === 1 ? "From" : "To"}:
        <span>
          {" " + props.currentSymbol?.symbol.toUpperCase() + " / USDT"}
        </span>
      </h2>
      <div className="modal-exchange">
        {props.symbols?.map((el: any) => (
          <span onClick={onSubmit} className="modal-exchange-child" key={el.id}>
            {el.symbol.toUpperCase() + " / USDT"}
          </span>
        ))}
      </div>
      {/* </Form.Item>
      </Form> */}
    </Modal>
  );
};

export default ContactMe;
