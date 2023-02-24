import { createContext, useEffect, useState } from "react";
import THEMES from "@/components/constants/themes";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const [theme, SetTheme] = useState(THEMES.light);

  useEffect(() => {
    const checkTheme = ()=>{
      const userTheme = (localStorage.getItem('theme') || THEMES.light);
      SetTheme(userTheme);
      document.getElementsByTagName('html')[0].dataset.theme = userTheme;
    }
    checkTheme();
    //多个页面之间主题同步
    window.addEventListener('storage',checkTheme);
    return ()=>{
      window.removeEventListener('storage',checkTheme); 
    }

  }, [])
  return (
    <ThemeContext.Provider value={
      {
        theme,
        SetTheme: (currentTheme) => {
          SetTheme(currentTheme);
          //保留用户喜好
          localStorage.setItem('theme',currentTheme);
          document.getElementsByTagName('html')[0].dataset.theme = currentTheme;
        }
      }
    }>
      {children}
    </ThemeContext.Provider>
  )
} 