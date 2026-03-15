import { useState } from "react";
import AddMealModal from "./AddMealModal";

import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = (newMeal) => {
    setMeals([...meals, { id: meals.length + 1, ...newMeal }]);
  };

  return (
    <div className="text-center">
      <Navbar />
      <Body meals={meals} />
      <Footer />
      <AddMealModal addMeal={addMeal} />
    </div>
  );
};

export default Home;
