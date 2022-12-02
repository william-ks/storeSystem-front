import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useUser from "./hooks/useUser";
import MainRoutes from "./routes/routes";
import GlobalStyle from "./style/global";
import dark from "./style/theme/dark";
import light from "./style/theme/light";

export default function App() {
  const { theme } = useUser();

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
