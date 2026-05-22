import { Badge } from "./Difficulty.styled";

function Difficulty({ level, children }) {
  return <Badge $level={level}>{children}</Badge>;
}

export default Difficulty;