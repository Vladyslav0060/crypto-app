import { FC } from "react";
import { Form, Input, InputNumber, Button } from "antd";
const Footer: FC = () => {
  return (
    <footer
      // style={{
      //   position: "absolute",
      //   left: "0",
      //   bottom: "0",
      //   right: "0",
      // }}
      className="footer-content"
    >
      <h3>Vladyslav Bortnik</h3>
      <section>
        {/* <h5 style={{ color: "white" }}>Contact with me</h5>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("fine");
          }}
        >
          <input placeholder=""></input>
          <input></input>
          <input></input>
          <button type="submit">Send</button>
        </form> */}
      </section>
      {/* <span style={{ color: "white" }}>some content</span> */}
    </footer>
  );
};
export default Footer;
