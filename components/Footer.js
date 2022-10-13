import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}


const StyledFooter = styled.div `
display: flex;
position: fixed;
background-color: gray;
left: 0px;
right: 0px;
bottom: 0px;
`
