import React from "react";
import "./DarkMode.scss";

function DarkMode() {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "light") {
    setLightMode();
  } else {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="dark-mode">
      <input type="checkbox" id="DarkMode-toggle" onChange={toggleTheme} 
      defaultChecked={selectedTheme !== "light"}/>
      <label htmlFor="DarkMode-toggle"></label>
      {/* <div className="backGround"></div> */}
    </div>
  );
}

export default DarkMode;
