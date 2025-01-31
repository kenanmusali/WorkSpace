
import Main from "../main";
import "./style/root.css";
import { LanguageProvider } from "../src/hooks/languageContext";
import changeTheme from "../src/hooks/changeTheme";

const savedTheme = localStorage.getItem("theme") || "light"; 
changeTheme(savedTheme);

const App = () => {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
};

export default App;