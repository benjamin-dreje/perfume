"use client";
import Link from "next/link";
import "./navBar.css";
import { useCart } from "../../context/cartContext";
import { useState, useEffect } from "react";

export default function NavBar() {
  const { cartCount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === "Escape") closeMenu();
      }}
    >
      <nav>
        <div className="logo">
          <Link href="/" className="logo-link">
            <h1 className="logo-text">Perfume</h1>
          </Link>

          <ul
            className={`navList${isMenuOpen ? " navListOpen" : ""}`}
            id="primary-navigation"
          >
            <li className="navItem">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link href="/about" onClick={closeMenu}>
                about
              </Link>
            </li>
            <li className="navItem">
              <Link href="/contact" onClick={closeMenu}>
                contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="userLogo">
          <Link className="orders-link" href="/orders">
            <i className="fa-solid fa-box-open"></i>
            <span>My Orders</span>
          </Link>
          <Link href="/cart">
            <div className="userCart">
              <i className="fa-solid fa-cart-arrow-down"></i>

              {isMounted && cartCount > 0 && (
                <div className="count">{cartCount}</div>
              )}
            </div>
          </Link>
          <i className="fa-solid fa-user"></i>
        </div>

        <button
          type="button"
          className="navToggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <i
            className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            aria-hidden="true"
          ></i>
        </button>
      </nav>
    </header>
  );
}
