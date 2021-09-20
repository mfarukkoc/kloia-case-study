import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSearchKeyword } from "../../redux/coffee/coffeeSlice";
import { RootState } from "../../app/rootReducer";

const SearchBoxInput = styled.input`
  border-radius: 6px;
  padding: 8px;
  width: 100%;
  font-family: "Roboto";
  font-size: 14px;
  border: 2px solid rgb(128, 128, 128);
  ::placeholder {
    font-family: "Roboto";
  }
`;

export type SearchBoxProps = React.ComponentPropsWithoutRef<
  typeof SearchBoxInput
>;

const SearchBox = (props: SearchBoxProps) => {
  const dispatch = useDispatch();
  const currentSearchKeyword = useSelector(
    (state: RootState) => state.coffeeSlice.searchKeyword,
  );

  return (
    <SearchBoxInput
      placeholder="Search"
      value={currentSearchKeyword}
      onChange={(event) => {
        dispatch(setSearchKeyword(event.target.value));
      }}
      {...props}
    />
  );
};

export default SearchBox;
