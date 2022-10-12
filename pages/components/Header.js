import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <StyledNavigation>
        <StyledLink href="/Desserts">Desserts</StyledLink>
      </StyledNavigation>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  background-color: green;
  margin: 0px;
  padding: 0px 20px 0px 20px;
`;

const StyledNavigation = styled.nav`
  display: flex;
  top: 0px;
  background-color: green;
  margin: 0px;
  padding: 10px;
`;

const StyledLink = styled(Link)`
  display: flex;
  top: 0px;
  background-color: green;
  margin: 0px;
  padding: 10px;
`;