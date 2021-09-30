import App from "next/app";
import Head from "next/head";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/theme";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
import Layout from "../components/layout";

let cat = ["Software", "Technology", "Reviews", "About"];

function MyApp({ Component, pageProps }) {
  const theme = useSelector((state: any) => state.theme);

  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Layout categories={cat}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
