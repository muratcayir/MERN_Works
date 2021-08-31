import {Link} from "react-router-dom"
import "./topbar.scss";

function Topbar() {

  const user = false;
  return (
    <>
      <div className="top-header ">
          <div className="container">
            <ul className="top-social-menu">
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

           <nav className="top-navbar">
            <ul class="top-navbar-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">contact</Link></li>
                <li><Link to="/">About</Link></li>
                <li><Link to="/write">write</Link></li>
                <li>{user && "LOGOUT"}</li>
              </ul>
           </nav>
           
            <div className="top-navbar-search">
                  <input type="search" placeholder="Search" />
                  <button type="submit" className="btn"></button><i className="topIcon fas fa-search"></i>
            </div>

            <div className="top-navbar-profile">
            {user ? (<img src="https://image.winudf.com/v2/image1/Y29tLmhkd2FsbHBhcGVyLndhbGxwYXBlcl9zY3JlZW5fdHItVFJfMTNfMTYwMzExNzA1NV8wMjQ/screen-8.jpg?fakeurl=1&type=.jpg" alt="" />)
            :(
              <ul className="top-navbar-list">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </ul>
            )
            
            }
            
            </div>
          </div>
        </div>
    </>
  );
}

export default Topbar;
