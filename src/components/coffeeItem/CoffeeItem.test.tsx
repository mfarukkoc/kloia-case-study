import { render } from "@testing-library/react";
import CoffeeItem, { CoffeeItemProps } from "./CoffeeItem";

describe("coffee item", () => {
  const item: CoffeeItemProps = {
    title: "Black",
    description:
      "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
    ingredients: ["ingredient1"],
    category: "hot",
    id: 1,
  };

  test("should display coffee item props", () => {
    const { getByText } = render(<CoffeeItem {...item} />);

    expect(getByText(item.title)).toBeInTheDocument();

    expect(getByText(item.description)).toBeInTheDocument();

    expect(
      getByText(item.ingredients[0], { exact: false }),
    ).toBeInTheDocument();
  });
});
