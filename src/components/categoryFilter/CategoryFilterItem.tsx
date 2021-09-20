import styled from "styled-components";

const CategoryFilterListItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 600;
  padding: 6px 3px;
  border-radius: 6px;
  color: ${(props) => (props.isActive ? "#2563eb" : "black")};
  transition: color linear 0.3s, background linear 0.3s;

  :hover {
    background: #bfdbfe;
  }
`;

export interface CategoryFilterItemProps {
  description: string;
  isActive: boolean;
  itemKey: string;
  onClick?: () => void;
}

const CategoryFilterItem = ({
  description,
  isActive,
  onClick: onClickFromProps,
}: CategoryFilterItemProps) => {
  return (
    <CategoryFilterListItem isActive={isActive} onClick={onClickFromProps}>
      {description}
    </CategoryFilterListItem>
  );
};

export default CategoryFilterItem;
