import { Card, Img, Content, Title, Info } from "./RecipeCard.styled";
import Difficulty from "../Difficulty/Difficulty";

function RecipeCard({ recipe }) {
  const labels = ["Easy", "Medium", "Hard"];

  return (
    <Card $highlight={recipe.difficulty === 2}>
      <Img src={recipe.image} alt={recipe.title} />

      <Content>
        <Title>{recipe.title}</Title>

        <Info>
          ⏱ {recipe.time} min • 🍽 {recipe.servings}
        </Info>

        <Difficulty level={recipe.difficulty}>
          {labels[recipe.difficulty]}
        </Difficulty>
      </Content>
    </Card>
  );
}

export default RecipeCard;