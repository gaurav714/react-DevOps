import { useState } from "react";
import "./App.css";
import MyForm from "./Components/MyForm";

import NavbarBootstrap from "./Components/Navbar";

function App() {
  const [DarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!DarkMode);
    console.log(DarkMode);
    document.body.style.backgroundColor = DarkMode ? "white" : "#323234";
  };
  return (
    <>
      <NavbarBootstrap DarkMode={DarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <MyForm DarkMode={DarkMode} />
      </div>
    </>
  );
}

export default App;
