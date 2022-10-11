import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    
}

main {
    margin: 0px;
    background-color: gray;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}


`;
