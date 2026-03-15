const AddMealModal = ({ addMeal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const newMeal = {
      type: form.mealType.value,
      name: form.mealName.value,
      calories: Number(form.calories.value),
    };

    addMeal(newMeal);

    form.reset;
  };

  return (
    <>
      <div className="modal fade" id="addMealModal" tabIndex1="-1">
        <div className="modal-dialog">
          <div className="modal-content modal-custom">
            <div className="modal-header border-0">
              <h5 className="modal-title modal-title-custom">Add Meal</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
