import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-about">
          <div className="sidebar-about-title">
            <h2>About Me</h2>
          </div>
          <div className="sidebar-about-img">
            <img
              src="https://c.wallhere.com/photos/a4/64/snake-95560.jpg!d"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, sunt.
            </p>
          </div>
        </div>

        <div className="sidebar-categories">
          <div className="sidebar-categories-title">
            <h2>Categories</h2>
          </div>
          <ul className="sidebar-categories-list">
            <li>life</li>
            <li>Music</li>
            <li>Sport</li>
            <li>Style</li>
            <li>Tech</li>
            <li>Cinema</li>
          </ul>
        </div>

        <div className="sidebar-social">
          <div className="sidebar-social-title">
            <h2>follow us</h2>
          </div>
          <ul className="sidebar-social-list">
            <li>
              <i className="topIcon fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="topIcon fab fa-twitter-square"></i>
            </li>
            <li>
              <i className="topIcon fab fa-pinterest-square"></i>
            </li>
            <li>
              <i className="topIcon fab fa-instagram-square"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
