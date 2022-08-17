import styled from "styled-components";

export const NoDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  max-height: 25rem;
  padding: 2rem;
`;

export const NoDataImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const NoDataTitle = styled.h1`
  color: var(--text);
`;

export const NoDataCopyright = styled.a`
  font-size: 0.8rem;
`;
