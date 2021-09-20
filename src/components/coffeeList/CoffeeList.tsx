import styled from "styled-components";
import { coffeeType } from "../../@fake-db/coffeeDB";
import CoffeeItem from "../coffeeItem/CoffeeItem";

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

const CoffeeList = ({ coffees }: CoffeeListProps) => {
  return (
    <StyledList>
      {Array.isArray(coffees) && coffees.length ? (
        coffees.map((coffee) => (
          <CoffeeItem
            id={coffee.id}
            title={coffee.title}
            description={coffee.description}
            ingredients={coffee.ingredients}
            category={coffee.category}
          />
        ))
      ) : (
        <ErrorMessageWrapper>No coffee found..</ErrorMessageWrapper>
      )}
    </StyledList>
  );
};

export default CoffeeList;
