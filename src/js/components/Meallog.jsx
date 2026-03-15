const MealLog = ({ meals }) => {
  return (
    <>
      <div>
        {meals.map((meal) => (
          <div className="meal-card" key={meal.id}>
            <h3>{meal.type}</h3>
            <p>{meal.name}</p>
            <span>{meal.calories} cal</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default MealLog;
