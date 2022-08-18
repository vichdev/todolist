import styled from "styled-components";
import { Button } from "../../../Button/styles";

export const FilterWrapper = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 15rem;
  height: 15rem;
  position: absolute;
  background-color: var(--background);
  border-radius: 0.5rem;
  box-shadow: 5px 5px 35px 19px rgba(0, 0, 0, 0.1);
  top: 5.5rem;
  right: 5rem;
  padding: 1rem;
  flex-direction: column;
  z-index: 999rem;
  justify-content: space-between;
`;

export const FilterButton = styled(Button)`
  height: 3rem;
`;
