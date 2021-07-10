import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import PhotoItem from "../photo-item";
import Loader from "../../../../libs/common/components/loader";
import { setLikeStatusAction } from "../../actions";

import "./photoList.scss";

const PhotoList = ({ list }) => {
  const VISIBLE_ITEMS_LENGTH = 10;
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(VISIBLE_ITEMS_LENGTH);
  const [photosList, setPhotosList] = useState([]);

  useEffect(() => {
    if (pathname === "/liked") {
      setPhotosList(list.likedPhotos);
    } else {
      setPhotosList(list.photos);
    }
  }, [list, pathname]);

  useEffect(() => {
    setVisible(VISIBLE_ITEMS_LENGTH);
  }, [pathname]);

  const loadMore = () => {
    setVisible((prevState) => {
      const itemsLength = photosList.length;
      const rest = itemsLength - prevState;
      return rest < VISIBLE_ITEMS_LENGTH
        ? prevState + rest
        : prevState + VISIBLE_ITEMS_LENGTH;
    });
  };

  const onHandleSelect = (element) => {
    dispatch(setLikeStatusAction(element));
  };

  return (
    <Fragment>
      {photosList.length ? (
        <Fragment>
          <div className="photos-wrapper">
            {photosList.slice(0, visible).map((item) => (
              <PhotoItem
                item={item}
                key={item.id}
                handleSelect={onHandleSelect}
              />
            ))}
          </div>
          <div className="load-more-container">
            {photosList.length > visible && (
              <button className="load-more" onClick={() => loadMore()}>
                Load More
              </button>
            )}
          </div>
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default PhotoList;
