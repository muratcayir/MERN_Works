import React from "react";
import "./topbar.scss";

function Topbar() {
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
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>WRITE</li>
                <li>LOGOUT</li>
              </ul>
           </nav>
           
            <div className="top-navbar-search">
                  <input type="search" placeholder="Search" />
                  <button type="submit" className="btn"></button><i className="topIcon fas fa-search"></i>
            </div>

            <div className="top-navbar-profile">
            <img src="https://image.winudf.com/v2/image1/Y29tLmhkd2FsbHBhcGVyLndhbGxwYXBlcl9zY3JlZW5fdHItVFJfMTNfMTYwMzExNzA1NV8wMjQ/screen-8.jpg?fakeurl=1&type=.jpg" alt="" /> 
            </div>
          </div>
        </div>
    </>
  );
}

export default Topbar;
