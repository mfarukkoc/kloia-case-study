import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import CategoryFilterItem from "./CategoryFilterItem";
import {
  categoryFilter,
  setCategoryFilter,
} from "../../redux/coffee/coffeeSlice";
import { RootState } from "../../app/rootReducer";
import { coffeeCategory } from "../../@fake-db/coffeeDB";

const CategoryFilterList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export interface CategoryType {
  description: string;
  itemKey: coffeeCategory;
}
export interface CategoryFilterProps {
  categories: CategoryType[];
}

const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const dispatch = useDispatch();

  const activeCategory = useSelector(
    (state: RootState) => state.coffeeSlice.category,
  );

  return (
    <CategoryFilterList>
      {categories.map((category) => (
        <CategoryFilterItem
          key={`category-${category.itemKey}`}
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
