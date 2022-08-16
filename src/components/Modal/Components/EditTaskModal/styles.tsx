import styled from "styled-components";

import { Button } from "../../../Button/styles";

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
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const ButtonWrapper = styled.div<{ isEdit?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.isEdit ? "center" : "space-between")};
`;

export const FormContainer = styled.div`
  display: flex;
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

export const EditTaskButton = styled(Button)`
  height: 3.5rem;
`;
