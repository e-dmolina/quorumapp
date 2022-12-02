import { Link, NavLink } from "react-router-dom";
import { HiTable } from "react-icons/hi";
import { NAV_BAR } from "../constants/strings";
import { CATEGORIES, RECENT_NEWS, TOP_RATED } from "../constants/navigation";

export const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-sm navbar-dark p-2'
      style={{ backgroundColor: "rgb(161, 117, 211)" }}
    >
      <Link className='navbar-brand' to='/'>
        <HiTable style={{ margin: 3 }} />
        {NAV_BAR.TITLE}
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to={`/${RECENT_NEWS}`}
          >
            {NAV_BAR.FIRST_ITEM}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to={`/${TOP_RATED}`}
          >
            {NAV_BAR.SECOND_ITEM}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to={`/${CATEGORIES}`}
          >
            {NAV_BAR.THIRD_ITEM}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
