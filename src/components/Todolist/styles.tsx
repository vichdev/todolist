import styled, { keyframes } from "styled-components";

const toggleList = keyframes`
from {display: none; opacity: 0;}
to {display: flex; opacity: 1}
`;

export const TodolistWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodolistContainer = styled.table`
  width: 100%;
  max-width: 80%;
  height: 100%;
  max-height: 80%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-border);
  }
`;

export const TableHeader = styled.thead`
  width: 100%;
  display: flex;
`;

export const ListAll = styled.tbody<{ setOpen: boolean }>`
  display: ${(props) => (props.setOpen ? "flex" : "none")};
  width: 100%;
  height: 100%;
  flex-direction: column;
  animation-name: ${toggleList};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  transition: 0.5s ease ${toggleList};
`;

export const TodoList = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  td {
    text-align: left;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const TodoListHeader = styled.tr`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  th {
    text-align: left;
    width: 100%;
    color: #a1a7bb;
    line-height: 1.5rem;
    font-weight: 500;
  }
`;

export const HeaderName = styled.th``;

export const HeaderDescription = styled.th``;

export const HeaderStatus = styled.th`
  max-width: 10rem;
  display: flex;
  justify-content: center;
`;

export const HeaderDate = styled.th`
  max-width: 10rem;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 360px) and (max-width: 576px) {
    display: none;
  }
`;

export const ButtonHeader = styled.th`
  max-width: 3rem;
  display: flex;
  justify-content: center;
`;

export const Name = styled.td``;

export const Description = styled.td``;

export const CreatedAt = styled.td`
  max-width: 10rem;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 360px) and (max-width: 576px) {
    display: none;
  }
`;

export const Status = styled.td`
  max-width: 10rem;
  display: flex;
  svg {
    cursor: default;
  }
  justify-content: center;
`;
export const Priority = styled.td`
  max-width: 10rem;
  display: flex;
  svg {
    cursor: default;
  }
  justify-content: center;
`;

export const ButtonsWrapper = styled.td`
  max-width: 3rem;
  display: flex;
  justify-content: space-between;
`;

export const DeleteModalButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const DeleteModalTitle = styled.span`
  text-align: center;
`;

export const DeleteModalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
