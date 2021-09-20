import { useSelector } from "react-redux";
import { getCoffees } from "../@fake-db/coffeeDB";
import { RootState } from "../app/rootReducer";
import CategoryFilter from "../components/categoryFilter/CategoryFilter";
import CoffeeList from "../components/coffeeList/CoffeeList";
import Layout, { Aside, Main } from "../components/layout/Layout";
import SearchBox from "../components/searchBox/SearchBox";
import { categoryFilter } from "../redux/coffee/coffeeSlice";

const Homepage = () => {
  const coffeeSearchProps = useSelector(
    (state: RootState) => state.coffeeSlice,
  );
  const coffees = getCoffees(
    coffeeSearchProps.searchKeyword,
    coffeeSearchProps.category as categoryFilter,
  );

  return (
    <Layout>
      <Aside>
        <SearchBox />
        <CategoryFilter />
      </Aside>
      <Main>
        <CoffeeList coffees={coffees} />
      </Main>
    </Layout>
  );
};

export default Homepage;
