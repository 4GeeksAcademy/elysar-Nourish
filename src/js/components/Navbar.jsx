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
          <button type="button" className="add-btn rounded-pill ms-auto">
            Add Meal +
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
