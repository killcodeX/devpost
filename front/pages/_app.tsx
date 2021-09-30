import App from "next/app";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../styles/theme";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
import Layout from "../components/layout";
import { fetchAPI } from "../lib/api";
import { getGlobal } from "../redux/actions/actions";
import { getStrapiMedia } from "../lib/media";
import React from "react";

let cat = ["Software", "Technology", "Reviews", "About"];

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  const { global } = pageProps;
  dispatch(getGlobal(global));
  const theme = useSelector((state: any) => state.theme);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <title>{global.siteName}</title>
      </Head>
      <ThemeProvider theme={theme ? dark : light}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async (ctx: any) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};

export default wrapper.withRedux(MyApp);
