import MealLog from "./Meallog";
const Body = ({ meals }) => {
  return (
    <>
      <div className="row">
        <div className="col meal-log-col col-8">
          <MealLog meals={meals} />
        </div>
        <div className="col summary-col border-start col-4">column 4</div>
      </div>
    </>
  );
};

export default Body;
