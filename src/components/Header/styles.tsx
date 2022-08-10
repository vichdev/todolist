import styled, { keyframes } from "styled-components";

const SearchAnimation = keyframes`
0%{width: 0rem}
100%{ width: 12rem}
`;

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
  justify-content: space-between;
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

export const AddTaskForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  color: var(--text);
`;

export const AddTaskInputs = styled.input`
  width: 100%;
  background-color: #e7e9ee;
  height: 3.5rem;
  border: 1px solid var(--gray-border);
  padding: 1rem;
  font-size: 1rem;
`;

export const AddTaskLabel = styled.label`
  color: var(--gray-text);
  font-size: 0.75rem;
`;

export const AddTaskInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15%;
  gap: 0.25rem;
`;

export const SwitchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const FormContainer = styled.div`
  display: FLEX;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const TasksListWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const TaskAdded = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: black;
  color: white;
`;
