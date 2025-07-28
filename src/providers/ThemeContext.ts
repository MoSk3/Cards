import { createContext } from "react";

const ThemeProvider = createContext({
  theme: "light" as string,
  toggleTheme: () => {},
});

export default ThemeProvider;
