import Link from "next/link";
import React, { useState } from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");

  // Toggle the mobile menu
  const openMobileMenu = (menu) => {
    setNavTitle(navTitle === menu ? "" : menu);
  };

  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu) => (
            <li
              key={menu.id}
              className={`menu-item ${menu.has_dropdown ? "has-dropdown" : ""}`}
            >
              <Link href={menu.link}>
                {menu.title}
              </Link>

              {/* Dropdown */}
              {menu.has_dropdown && menu.sub_menus && (
                <>
                  <ul
                    className={`submenu ${
                      navTitle === menu.title ? "submenu-open" : ""
                    }`}
                  >
                    {menu.sub_menus.map((sub) => (
                      <li key={sub.link} className="submenu-item">
                        <Link href={sub.link}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mean-expand ${
                      navTitle === menu.title ? "mean-clicked" : ""
                    }`}
                    onClick={() => openMobileMenu(menu.title)}
                    aria-expanded={navTitle === menu.title}
                  >
                    <i
                      className={`fal ${
                        navTitle === menu.title ? "fa-minus" : "fa-plus"
                      }`}
                    ></i>
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* CSS Styling */}
      <style jsx>{`
        .mean-nav ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .menu-item {
          position: relative;
        }
        .menu-item > a {
          text-decoration: none;
          display: block;
          padding: 10px;
          color: #333;
        }
        .has-dropdown > .submenu {
          display: none;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .has-dropdown > .submenu.submenu-open {
          display: block;
        }
        .submenu-item > a {
          text-decoration: none;
          display: block;
          padding: 8px 15px;
          color: #666;
        }
        .submenu-item > a:hover {
          background-color: #f4f4f4;
        }
        .mean-expand {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 10px;
          color: #333;
        }
        .mean-expand:focus {
          outline: none;
        }
        .mean-expand i {
          pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default MobileMenus;
