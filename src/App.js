import { useState } from "react";
import "./App.css";
import MyForm from "./Components/MyForm";

import NavbarBootstrap from "./Components/Navbar";
import BootstrapAlert from "./Components/alert";

function App() {
  const [DarkMode, setDarkMode] = useState(false); // for the dark theme
  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
    document.body.style.backgroundColor = DarkMode ? "white" : "#323234";
    showAlert("Darkmode set to " + !DarkMode, "warning");
  };

  const [Alert, setAlert] = useState(null);
  const showAlert = (AlertText, AlertType) => {
    setAlert({
      message: AlertText,
      type: AlertType,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <BootstrapAlert Alert={Alert} />
      <NavbarBootstrap DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <MyForm DarkMode={DarkMode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
