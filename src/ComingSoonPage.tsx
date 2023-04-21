import "./ComingSoonPage.css";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <header>
        <div className="nav-bar">
          <ul className="menu">
            <a href="/">
              <li className="items">Home</li>
            </a>
            <a href="/">
              <li className="items">About Us</li>
            </a>
            <a href="/">
              <li className="items">Contact Us</li>
            </a>
          </ul>
        </div>
        <div className="ham">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </header>
      <div className="container">
        <h2>New Web Site</h2>
        <h3>Comming Soon...</h3>
        <form action="">
          <p>
            An awesome platform to share your story is comming very soon. Enter
            your email to get notified.
          </p>
          <div className="form-item">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email Here"
            />
            <input type="submit" value="Notify Me" />
          </div>
        </form>
        <p>Follow us on</p>
        <div className="follow-us">
          <a href="#your-fb-page">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#your-twitter-profile">
            <i className="fab fa-twitter-square"></i>
          </a>
          <a href="#your-instagram-page">
            <i className="fab fa-instagram-square"></i>
          </a>
        </div>
        <p className="footer">Copyright &copy; newwebsite.com 2023</p>
      </div>
    </div>
  );
}

export default App;
