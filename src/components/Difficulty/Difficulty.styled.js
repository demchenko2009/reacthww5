import styled from "styled-components";

export const Badge = styled.span`
  align-self: flex-start;

  padding: 5px 10px;
  border-radius: 6px;

  font-size: 12px;
  font-weight: 600;

  color: white;

  background: ${({ $level }) => {
    switch ($level) {
      case 0:
        return "#2ecc71";
      case 1:
        return "#f39c12";
      case 2:
        return "#e74c3c";
      default:
        return "#555";
    }
  }};
`;