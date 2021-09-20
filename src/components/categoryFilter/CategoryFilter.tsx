import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import CategoryFilterItem from "./CategoryFilterItem";
import {
  categoryFilter,
  setCategoryFilter,
} from "../../redux/coffee/coffeeSlice";
import { RootState } from "../../app/rootReducer";

const CategoryFilterList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const categoryArray = [
  {
    description: "All Coffees",
    itemKey: "all",
  },
  {
    description: "Hot",
    itemKey: "hot",
  },
  {
    description: "Iced",
    itemKey: "iced",
  },
];

const CategoryFilter = () => {
  const dispatch = useDispatch();

  const activeCategory = useSelector(
    (state: RootState) => state.coffeeSlice.category,
  );

  return (
    <CategoryFilterList>
      {categoryArray.map((category) => (
        <CategoryFilterItem
          description={category.description}
          itemKey={category.itemKey}
          isActive={activeCategory === category.itemKey}
          onClick={() => {
            dispatch(setCategoryFilter(category.itemKey as categoryFilter));
          }}
        />
      ))}
    </CategoryFilterList>
  );
};

export default CategoryFilter;
