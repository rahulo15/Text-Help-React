import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
// import About from "./components/About";
import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "Text-Help - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "Text-Help - LightMode";
    }
  };

  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="Text-Help" about="About Us" /> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to Analyze below"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes> */}
        <TextForm
          heading="Enter the text to Analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
