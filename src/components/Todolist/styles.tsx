import styled from "styled-components";

export const TodolistWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodolistContainer = styled.table`
  width: 100%;
  max-width: 80%;
  height: 100%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  tr:nth-child(even) {
    background-color: #dddddd;
  }
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
`;

export const Status = styled.td`
  max-width: 10rem;
  display: flex;
  justify-content: center;
`;

export const ButtonsWrapper = styled.td`
  max-width: 3rem;
  display: flex;
  justify-content: space-between;
`;
