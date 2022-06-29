import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(7,54,123)";
      document.body.style.color = "white";
      showalert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("Light Mode is Enabled", "success");
    }
  };
  return (
    <>
      <div className="App">
        <div>
        <BrowserRouter>
        <Navbar title="Text Changer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        
          <Routes>
            <Route
              exact path="/"
              element={
                <div>
                  <TextForm heading="Enter the text to customize" mode={mode} />
                </div>
              }
            />
            <Route
             exact path="/about"
              element={
                <div>
                  <About />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
        </div>
      </div>

      {/* <Router> */}
      {/* <div className="App">
          <Navbar title="Text Changer" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        </div>
        <TextForm heading="Enter the text to customize" mode={mode} />
        </div> */}

      {/* <Routes>
          <Route
            exact
            path="/"
            element={
            }
          />
          <Route path="./about" element={<About h1="About Us" text="hello World" />} />
        </Routes>
        {/* <About/> */}
      {/* </Router> */}
    </>
  );
}
export default App;
