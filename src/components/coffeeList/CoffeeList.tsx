import styled from "styled-components";
import { memo, lazy, Suspense } from "react";
import { coffeeType } from "../../@fake-db/coffeeDB";

const CoffeeItem = lazy(() => import("../coffeeItem/CoffeeItem"));

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const ErrorMessageWrapper = styled.p`
  background: rgb(240, 240, 240);
  padding: 20px;
  border-radius: 10px;
  font-family: "Roboto";
  font-weight: 500;
`;

export interface CoffeeListProps {
  coffees: coffeeType[];
}

const CoffeeList = memo(({ coffees }: CoffeeListProps) => {
  return (
    <StyledList>
      {Array.isArray(coffees) && coffees.length ? (
        coffees.map((coffee) => (
          <Suspense fallback={<div>Coffee loading...</div>}>
            <CoffeeItem
              id={coffee.id}
              title={coffee.title}
              description={coffee.description}
              ingredients={coffee.ingredients}
              category={coffee.category}
            />
          </Suspense>
        ))
      ) : (
        <ErrorMessageWrapper>No coffee found..</ErrorMessageWrapper>
      )}
    </StyledList>
  );
});

export default CoffeeList;
