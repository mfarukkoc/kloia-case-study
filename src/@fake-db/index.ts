import coffeeDB from "./coffeeDB";

const initDB = () => {
  localStorage.setItem("coffees", JSON.stringify(coffeeDB.cofees));
};

initDB();
