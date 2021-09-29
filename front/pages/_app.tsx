import App from "next/app";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/theme";
import { wrapper } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {

  const theme = useSelector((state: any) => state.theme)
  
  return (
      <ThemeProvider theme={theme? dark : light}>
        <Component {...pageProps} />
      </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
