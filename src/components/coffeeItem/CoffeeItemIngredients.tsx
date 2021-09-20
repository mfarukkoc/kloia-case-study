import { memo } from "react";
import styled from "styled-components";

const Ingredients = styled.p`
  font-family: "Roboto";
  font-size: 14px;
`;

export interface CoffeeItemIngredientsProps {
  ingredients: string[];
}

const CoffeeItemIngredients = memo(
  ({ ingredients }: CoffeeItemIngredientsProps) => {
    return <Ingredients>Ingredients: {ingredients.join(", ")}</Ingredients>;
  },
);

export default CoffeeItemIngredients;
