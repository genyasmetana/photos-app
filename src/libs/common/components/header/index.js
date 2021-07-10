import { NavLink } from "react-router-dom";

import "./index.scss";

export default function Header() {
  return (
    <nav>
      <ul className="list">
        <li>
          <NavLink
            className="list__item"
            activeClassName="list__item--active"
            to="/list"
          >
            Photos List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="list__item"
            activeClassName="list__item--active"
            to="/liked"
          >
            Photos Liked
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
