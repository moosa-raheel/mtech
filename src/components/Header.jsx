import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { TypeAnimation } from "react-type-animation";

export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <Navbar />
        <div className="container header-container">
          <div className="content">
            <div className="left">
              <h1 className="heading">MTECH</h1>
              <TypeAnimation
                sequence={[
                  "The Name Of Technology",
                  1000,
                  "The Name Of Trust",
                  1000,
                  "The Name Of Happiness",
                  1000,
                  "The name Of Design",
                  1000,
                ]}
                wrapper="h2"
                repeat={Infinity}
              />
              <p className="para">
                We are provide our services since 2005 and our all customers are
                setisfy from our services.
              </p>
              <div className="buttons">
                <button className="btn btn-product">Products</button>
                <button
                  className="btn btn-contact"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </header>
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
