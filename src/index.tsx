import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import { ThemeProvider } from "./context/ThemeContext";
import { TrashProvider } from "./context/TrashContext";
import { AppProvider } from "./context/AppContext";
ReactDOM.render(
  <ThemeProvider>
    <TrashProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </TrashProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
