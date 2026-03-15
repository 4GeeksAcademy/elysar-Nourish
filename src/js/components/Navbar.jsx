const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-custom ms-auto"
        style={{ backgroundColor: "#354f52" }}
      >
        <div className="container-fluid p-3">
          <a className="navbar-brand" href="#">
            nourish.
          </a>

          <div className="date-nav ms-auto me-3">
            <button className="date-btn">←</button>
            <span>Today</span>
            <button className="date-btn">→</button>
          </div>

          <button
            type="button"
            className="add-btn rounded-pill ms-auto"
            data-bs-toggle="modal"
            data-bs-target="#addMealModal"
          >
            Add Meal +
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
