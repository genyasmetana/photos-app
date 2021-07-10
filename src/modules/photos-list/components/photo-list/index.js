import { Fragment } from "react";

import PhotoItem from "../photo-item";

import "./photoList.scss";

const PhotoList = ({ photoList }) => {
  return (
    <div>
      {photoList.length ? (
        <Fragment>
          <div className="photos-wrapper">
            {photoList.map((item) => (
              <PhotoItem item={item} key={item.id} />
            ))}
          </div>
          <div className="load-more-container">
            <button className="load-more">Load More</button>
          </div>
        </Fragment>
      ) : (
        <h2>There is nothing to show</h2>
      )}
    </div>
  );
};

export default PhotoList;
