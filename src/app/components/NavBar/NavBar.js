"use client";
import Link from "next/link";
import "./navBar.css";
import { useCart } from "../../context/cartContext";

export default function NavBar() {
  const { cartCount } = useCart();

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
          <div className="userCart">
            <i className="fa-solid fa-cart-arrow-down"></i>
            {cartCount > 0 && <div className="count">{cartCount}</div>}
          </div>

          <i className="fa-solid fa-user"></i>
        </div>
      </nav>
    </header>
  );
}
