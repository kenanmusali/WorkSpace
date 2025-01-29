import Main from "../main"
import './style/root.css'
import { LanguageProvider } from '../src/hooks/languageContext';

const App = () => {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
};

export default App;
