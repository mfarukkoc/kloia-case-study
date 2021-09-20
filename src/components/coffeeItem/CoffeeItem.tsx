import { memo } from "react";
import { coffeeType } from "../../@fake-db/coffeeDB";
import CoffeeItemDescription from "./CoffeeItemDescription";
import CoffeeItemIngredients from "./CoffeeItemIngredients";
import CoffeeItemTitle from "./CoffeeItemTitle";

export type CoffeeItemProps = coffeeType;

const CoffeeItem = memo(
  ({ ingredients, title, description }: CoffeeItemProps) => {
    return (
      <div>
        <CoffeeItemTitle title={title} />
        <CoffeeItemDescription description={description} />
        <CoffeeItemIngredients ingredients={ingredients} />
      </div>
    );
  },
);

export default CoffeeItem;
