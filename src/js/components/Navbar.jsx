const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-custom ms-auto"
        style={{ backgroundColor: "#354f52" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Nourish
          </a>
        </div>
        <button type="button" className="btn btn-success rounded-pill ms-auto">
          Add Meal +
        </button>
      </nav>
    </>
  );
};

export default Navbar;
