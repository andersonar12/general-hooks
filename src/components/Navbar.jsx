const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center">
          <img src={require("../assets/favicon.ico")} width="30" alt="" className="me-3"></img>
          <strong>Hooks App</strong>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
