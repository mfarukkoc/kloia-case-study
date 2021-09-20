import { memo } from "react";
import styled from "styled-components";

const Title = styled.h3`
  font-family: "ExoBold";
`;

export interface CoffeeItemTitleProps {
  title: string;
}

const CoffeeItemTitle = memo(({ title }: CoffeeItemTitleProps) => {
  return <Title>{title}</Title>;
});

export default CoffeeItemTitle;
