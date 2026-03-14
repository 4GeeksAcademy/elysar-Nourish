import MealLog from "./Meallog";
const Body = ({ meals }) => {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <MealLog meals={meals} />
        </div>
        <div className="col col-2">column 2</div>
      </div>
    </>
  );
};

export default Body;
