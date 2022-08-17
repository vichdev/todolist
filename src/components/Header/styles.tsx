import styled from "styled-components";
import { Button } from "../Button/styles";

export const HeaderWrapper = styled.div`
  width: 100%;
  background-color: var(--primary);
  height: 13rem;
  box-shadow: 0px 0px 30px 1px #cecece;
  color: white;
`;
export const HeaderTitle = styled.h1``;

export const NavbarSearch = styled.input`
  width: 12rem;
  height: 3rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  border: 1px solid var(--text);
  color: black;
`;

export const NavbarSearchWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    color: var(--text);
    right: 0;
    transform: translate(-50%, -50%);
  }
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

export const FilterButton = styled(Button)`
  width: 3rem;
  height: 3rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
