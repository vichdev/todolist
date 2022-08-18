import styled from "styled-components";

export const SummaryWrapper = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -7rem;
  gap: 2rem;
  @media (min-width: 360px) and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SummaryContainer = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const SummaryHeader = styled.div<{ iconColor: string }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  svg {
    color: ${(props) => props.iconColor};
    font-size: 2rem;
    cursor: default;
  }
`;

export const SummaryHeaderTitle = styled.h1`
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SummaryIcon = styled.svg``;

export const SummaryQuantity = styled.h1``;
