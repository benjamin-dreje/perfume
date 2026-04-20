import Link from "next/link";
import "./navBar.css";

export default function NavBar() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <h1>Perfume</h1>

          <ul className="navList">
            <li className="navItem">
              <Link href="/">Home</Link>
            </li>
            <li className="navItem">
              <Link href="/about">about</Link>
            </li>
            <li className="navItem">
              <Link href="/contact">contact</Link>
            </li>
          </ul>
        </div>

        <div className="userLogo">
          <i className="fa-solid fa-cart-arrow-down"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </nav>
    </header>
  );
}
