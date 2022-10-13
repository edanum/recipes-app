import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}


const Main = styled.main`
background-color: grey;
margin-top: 79.75px;
position:relative;
left: 0px;

`