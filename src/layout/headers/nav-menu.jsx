import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <nav>
        <ul className="menu">
          {menu_data.map((menu_item) => (
            <li key={menu_item.id} className={`menu-item ${menu_item.has_dropdown ? "has-dropdown" : ""}`}>
              <Link href={menu_item.link}>
                {menu_item.title}
              </Link>

              {/* Dropdown menu */}
              {menu_item.has_dropdown && menu_item.sub_menus && (
                <ul className="submenu">
                  {menu_item.sub_menus.map((sub_menu) => (
                    <li key={sub_menu.link} className="submenu-item">
                      <Link href={sub_menu.link}>
                        {sub_menu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* CSS Styling */}
      <style jsx>{`
        .menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
        }
        .menu-item {
          position: relative;
          margin-right: 20px;
        }
        .menu-item > a {
          text-decoration: none;
          padding: 10px 15px;
          color: #333;
          display: inline-block;
        }
        .menu-item.has-dropdown > a:hover {
          color: #0070f3;
        }
        .submenu {
          list-style: none;
          padding: 0;
          margin: 0;
          position: absolute;
          top: 100%;
          left: 0;
          display: none;
          background: #fff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
        .menu-item.has-dropdown:hover .submenu {
          display: block;
        }
        .submenu-item > a {
          text-decoration: none;
          padding: 10px 15px;
          display: block;
          color: #333;
        }
        .submenu-item > a:hover {
          background: #f4f4f4;
        }
      `}</style>
    </>
  );
};

export default NavMenu;
