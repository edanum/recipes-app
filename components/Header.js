import styled from "styled-components";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
      <StyledNavigation>
        <Link href="/">Home</Link>
        <Link href="/Dessert">Desserts</Link>
        <Link href="/Veggie">Veggie</Link>
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
  position: fixed;
  width: 100%;
  z-index: 1
`;

const StyledNavigation = styled.nav`
  display: flex;
  top: 0px;
  gap: 20px;
  background-color: green;
  margin: 0px;
  padding: 10px;
  font-size: 30px;
`;

