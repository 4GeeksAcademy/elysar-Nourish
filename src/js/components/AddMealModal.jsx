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

    form.reset();
  };

  return (
    <>
      <div className="modal fade" id="addMealModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content modal-custom">
            <div className="modal-header border-0">
              <h5 className="modal-title modal-title-custom">Add Meal</h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label-custom">Meal Type</label>
                  <select
                    name="mealType"
                    className="form-select form-input-custom"
                  >
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    <option>Snack</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label-custom">Food Items</label>

                  <input
                    name="mealName"
                    type="text"
                    className="form-control form-input-custom"
                    placeholder="e.g. chicken, rice, broccoli"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label-custom">
                    Calories (optional)
                  </label>
                  <input
                    name="calories"
                    type="number"
                    className="form-control form-input-custom"
                    placeholder="e.g. 340"
                    required
                  />
                </div>

                <div className="d-flex gap-2 mt-4">
                  <button
                    type="button"
                    className="btn btn-cancel-custom flex-fill"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn add-btn flex-fill"
                    data-bs-dismiss="modal"
                  >
                    Save meal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMealModal;
