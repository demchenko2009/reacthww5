import styled, { css } from "styled-components";

export const Card = styled.div`
  overflow: hidden;
  background: red;
  border: 1px solid aqua;

  display: flex;
  flex-direction: column;
justify-content: center;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-8px);
  }

  ${({ $highlight }) =>
    $highlight &&
    css`
      border-color: #ff3b3b;
    `}
`;

export const Img = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const Content = styled.div`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 16px;
  color: white;
`;

export const Info = styled.p`
  font-size: 13px;
  color: #aaa;
`;