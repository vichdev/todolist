import styled from "styled-components";

export const AddTaskForm = styled.div`
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
  display: flex;
  gap: 1rem;
  height: 100%;
  justify-content: center;
`;

export const TaskAdded = styled.div`
  width: 7rem;
  height: 2rem;
  background-color: var(--primary);
  position: relative;
  color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
`;

export const TaskAddedTitle = styled.span``;

export const ErrorWrapper = styled.div`
  text-align: center;
  color: var(--red);
`;

export const PriorityButtonWrapper = styled.div`
  height: 100%;
`;

export const PrioritySelect = styled.select`
  height: 100%;
  width: 4.5rem;
  border: 1px solid black;
  color: white;
  background-color: var(--text);
  font-size: 0.8rem;
  color: ${(props) => props.color};
`;
