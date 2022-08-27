import { createGlobalStyle, ThemeProvider } from "styled-components";
// import AcehFont from "../public/fonts/Aceh-Light.ttf";
import type { AppProps } from "next/app";

const theme = {
  colors: {
    primary: "#fff",
  },
};

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #fff;
  display:block;
  height: 100%;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fff;
  min-height:100vh;
  margin-top:0;
  font-family:Verdana;
  margin:0 auto;
  padding:0;
}

/* @font-face {
  font-family: 'Aceh-Light';
  src: url(${AcehFont}) format('ttf')
} */
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
