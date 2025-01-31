import "../../../style/modal/toggle.css";
import changeTheme from "../../../hooks/changeTheme";
import { useState, useEffect } from "react";

const Theme = () => {
  // Initialize isDark based on localStorage
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply the theme on initial load and whenever isDark changes
  useEffect(() => {
    changeTheme(isDark ? "dark" : "light");
  }, [isDark]);

  // Toggle the theme
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"; // Toggle between dark and light
    setIsDark(!isDark); // Update state
    changeTheme(newTheme); // Apply the new theme
  };

  return (
    <div>
      <div className="ItemSectionGroup1">
        <div className="ItemSection1">
          <p className="p">Change theme</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={isDark} // Checkbox reflects the current theme
              onChange={toggleTheme} // Toggle theme on change
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Theme;