import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getPhotosListAction } from "./actions";
import PhotoList from "./components/photo-list";

import "./photosList.scss";

export default function PhotosList() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const photoList = useSelector(({ photosList }) => {
    return photosList;
  });

  useEffect(() => {
    setTimeout(() => dispatch(getPhotosListAction()), 1000);
  }, [dispatch]);

  return (
    <div className="content">
      <h2 className="content__title">
        {pathname === "/liked" ? "Liked Photos" : "Photo list"}
      </h2>

      <PhotoList list={photoList} />
    </div>
  );
}
