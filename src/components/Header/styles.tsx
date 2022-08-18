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

export const NavbarSearchWrapper = styled.div`
  width: 100%;
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 360px) and (max-width: 768px) {
    display: none;
  }
`;

export const FilterButton = styled(Button)`
  width: 3rem;
  height: 3rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const MobileModalWrapper = styled.div`
  display: none;
  svg {
    display: none;
  }

  @media (min-width: 360px) and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
    svg {
      display: flex;
      font-size: 2rem;
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
