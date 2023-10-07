"use client";

import { useState } from "react";
import classes from "./Navbar.module.css";
import Link from "next/link";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={classes.TopNavbar}>
        <a href="#">Falloween Sale! Get 10% Off Using Code PUMPKIN10</a>
      </div>
      <nav className={classes.navbar}>
        <div className="container">
          <div className={`row ${classes.nav_row}`}>
            <div className={classes.iconNavbar}>
              <Link href="/">
                <img
                  src="https://cdn.shopify.com/s/files/1/0254/2275/7985/files/MysteryStickerPack_x50.jpg?v=1684324277"
                  alt=""
                />
              </Link>
            </div>
            <div className={classes.nav_center}>
              <div className={classes.navbar_input}>
                <input type="text" name="" id="" placeholder="Search" />
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>
              <div className={classes.nav_center_bottom}>
                <ul>
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes.nav_right}>
              <ul>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span>Cart</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                    </svg>
                    <span>Like</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
