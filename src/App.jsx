import recipes from "./recipes.json";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  background: #0f172a;
`;
function App() {
  return (
    <Wrapper>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </Wrapper>
  );
}

export default App;