import styled, { keyframes } from "styled-components";

const SearchAnimation = keyframes`
0%{width: 0rem}
100%{ width: 12rem}
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--header);
  height: 13rem;
  box-shadow: 0px 0px 30px 1px #cecece;
  color: white;
`;
export const HeaderTitle = styled.h1``;

export const NavbarSearch = styled.input`
  width: 12rem;
  height: 2.5rem;
  font-size: 1rem;
  border-radius: 0.2rem;
  display: none;
  border: 1px solid var(--text);
  color: black;
  animation-name: ${SearchAnimation};
  animation-duration: 0.5s;
  padding: 0.5rem;
`;

export const NavbarSearchWrapper = styled.div`
  width: 100%;
  max-width: 15rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const NavbarButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 99rem;
  border: none;
  text-align: center;
  background: transparent;
  &:hover {
    ${NavbarSearch} {
      display: flex;
    }
    svg {
      color: #000;
      display: none;
    }
  }
  svg {
    font-size: 1rem;
    color: white;
  }
`;
