import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="container nav-container">
          <a href="#" className="logo">
            MTECH
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Signup</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
window.addEventListener("scroll", () => {
  const nav = document.getElementsByTagName("nav")[0];
  if (document.documentElement.scrollTop > 50) {
    nav.classList.add("nav-scroll");
  } else {
    nav.classList.remove("nav-scroll");
  }
});
