import { FC, useContext, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import FramerWrapper from "../wrapper/FramerWrapper";
import axios, { AxiosError } from "axios";
import { AppContext } from "../../context/AppContext";
import { actionTypes } from "../../reducers/AppReducer";
import Notification from "../Notification";
const Login: FC = () => {
  const { dispatch } = useContext(AppContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onChange = (event: any) => {
    event.target.name === "username"
      ? setUserName(event.target.value)
      : setPassword(event.target.value);
  };
  const onSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response: any = await axios.post(
        "https://evening-island-58892.herokuapp.com/auth/login",
        {
          username: username,
          password: password,
        }
      );
      console.log(response);
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch({ type: actionTypes.SET_IS_LOGGED_IN, payload: true });
      Notification({
        message: `Login succeed!`,
        duration: 2,
        description: "You're welcome.",
      });
      if (token) navigate("/home");
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
  const redirect = () => {
    navigate("/register");
  };
  return (
    <FramerWrapper>
      <div className="page-wrapper">
        <div className="center">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <div className="txt-field">
              <input type="text" name="username" onChange={onChange} required />
              {/* <span></span> */}
              <label>Username</label>
            </div>
            <div className="txt-field">
              <input
                type="password"
                name="password"
                onChange={onChange}
                required
              />
              {/* <span></span> */}
              <label>Password</label>
            </div>
            <input type="submit" value="Login" />
            <div className="signup_link">
              Not a member? <a onClick={redirect}>Register</a>
            </div>
          </form>
        </div>
      </div>
    </FramerWrapper>
  );
};

export default Login;
