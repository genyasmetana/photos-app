import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import {
  likedPhotosAction,
  photoListAction,
} from "../../../../modules/photos-list/actions";

import "./header.scss";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <nav>
      <ul className="list">
        <li>
          <NavLink
            className="list__item"
            activeClassName="list__item--active"
            to="/list"
            onClick={() => dispatch(photoListAction())}
          >
            Photos List
          </NavLink>
        </li>
        <li>
          <NavLink
            className="list__item"
            activeClassName="list__item--active"
            to="/liked"
            onClick={() => dispatch(likedPhotosAction())}
          >
            Photos Liked
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
