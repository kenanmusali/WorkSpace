import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

// Custom hook to access language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Language provider to manage and persist language
export const LanguageProvider = ({ children }) => {
  // Get the saved language from localStorage or fallback to 'en'
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      return savedLanguage ? savedLanguage : 'en';
    }
    return 'en';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]); // This will run every time `language` changes

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
