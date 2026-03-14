import { useState } from "react";

import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";

const Home = () => {
  const [meals, setMeals] = useState([
    { id: 1, type: "Breakfast", name: "Greek yogurt & granola", calories: 420 },
    { id: 2, type: "Lunch", name: "Grilled Chicken Salas", calories: 540 },
  ]);

  return (
    <div className="text-center">
      <Navbar />
      <Body meals={meals} />
      <Footer />
    </div>
  );
};

export default Home;
