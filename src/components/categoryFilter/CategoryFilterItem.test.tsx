import { render, fireEvent } from "@testing-library/react";
import CategoryFilterItem, {
  CategoryFilterItemProps,
} from "./CategoryFilterItem";

describe("categoryFilterItem", () => {
  const defaultProps: CategoryFilterItemProps = {
    description: "description",
    isActive: false,
    itemKey: "itemKey",
    onClick: () => "",
  };
  test("should display description prop", () => {
    const description = "Category Filter Item 1";
    defaultProps.description = description;
    const { getByText } = render(<CategoryFilterItem {...defaultProps} />);

    expect(getByText(description)).toBeInTheDocument();
  });

  test("should call onClick function when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <CategoryFilterItem {...defaultProps} onClick={onClickMock} />,
    );

    fireEvent.click(getByText(defaultProps.description));

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("color should change when active", () => {
    const { getByRole, rerender } = render(
      <CategoryFilterItem {...defaultProps} />,
    );

    const initialColor = window.getComputedStyle(getByRole("listitem")).color;

    rerender(<CategoryFilterItem {...defaultProps} isActive />);

    const activeColor = window.getComputedStyle(getByRole("listitem")).color;
    expect(activeColor).not.toEqual(initialColor);
  });
});
