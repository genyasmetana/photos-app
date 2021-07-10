import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <li>
        <NavLink to="/list">Photos List</NavLink>
      </li>
      <li>
        <NavLink to="/liked">Photos Liked</NavLink>
      </li>
    </nav>
  );
}
