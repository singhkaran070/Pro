const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/nike_logo.png" alt="brand-logo"></img>
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">contact</li>
        <li href="#">About</li>
      </ul>

      <button>Login</button>
    </nav>
  );
};

export default Navigation;
