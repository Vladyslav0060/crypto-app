import { FC, useContext, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import FramerWrapper from "../wrapper/FramerWrapper";
import axios, { AxiosError } from "axios";
import { AppContext } from "../../context/AppContext";
import { actionTypes } from "../../reducers/AppReducer";
import Notification from "../Notification";
const Register: FC = () => {
  const { dispatch } = useContext(AppContext);
  const [username, setUserName]: any = useState("");
  const [password, setPassword]: any = useState("");
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/login");
  };
  const onChange = (event: any) => {
    event.target.name === "username"
      ? setUserName(event.target.value)
      : setPassword(event.target.value);
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response: any = await axios.post(
        "https://evening-island-58892.herokuapp.com/auth/registration",
        {
          username: username,
          password: password,
        }
      );
      console.log(response);
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch({ type: actionTypes.SET_IS_LOGGED_IN, payload: true });
      navigate("/home");
      Notification({ message: "message", duration: 3, description: "asd" });
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        Notification({
          message: `Registration error`,
          duration: 2,
          description: err.response.data.message,
        });
      }
    }
  };
  return (
    // <motion.div
    //   exit={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   initial={{ opacity: 0 }}
    //   className="page-wrapper"
    // >
    <FramerWrapper>
      <div className="page-wrapper">
        <div className="css-gradient2">
          <div className="center">
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
              <div className="txt-field">
                <input
                  type="text"
                  name="username"
                  onChange={onChange}
                  required
                />
                {/* <span></span> */}
                <label>Username</label>
              </div>
              <div className="txt-field">
                <input
                  type="password"
                  required
                  name="password"
                  onChange={onChange}
                />
                {/* <span></span> */}
                <label>Password</label>
              </div>
              <input type="submit" value="Register" />
              <div className="signup_link">
                Already a member? <a onClick={redirect}>Sign up</a>
              </div>
            </form>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </FramerWrapper>
  );
};

export default Register;
