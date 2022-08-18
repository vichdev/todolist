import styled from "styled-components";

export const NavbarSearch = styled.input<{ isMobile?: boolean }>`
  width: ${(props) => (props.isMobile ? "100%" : "12rem")};
  height: 3rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  border: 1px solid var(--text);
  color: black;
`;

export const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 50%;
    color: var(--text);
    right: 0.4rem;
    transform: translate(-50%, -50%);
  }
`;
