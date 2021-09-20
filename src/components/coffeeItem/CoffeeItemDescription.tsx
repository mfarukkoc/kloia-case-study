import styled from "styled-components";

const Description = styled.p`
  font-family: "Roboto";
`;

export interface CoffeeItemDescriptionProps {
  description: string;
}

const CoffeeItemDescription = ({ description }: CoffeeItemDescriptionProps) => {
  return <Description>{description}</Description>;
};

export default CoffeeItemDescription;
