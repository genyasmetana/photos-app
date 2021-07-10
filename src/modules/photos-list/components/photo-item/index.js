import PropTypes from "prop-types";
import classNames from "classnames";
import "./photoItem.scss";

const PhotoItem = ({ item, handleSelect }) => {
  const { thumbnailUrl, title, liked } = item;

  const likeBtn = classNames({
    "icon-heart": true,
    isActive: liked,
  });

  return (
    <figure className="figure">
      <img className="figure__img" src={thumbnailUrl} alt={title} />
      <div className={likeBtn} onClick={() => handleSelect(item)} />
      <figcaption className="figure__description">{title}</figcaption>
    </figure>
  );
};

PhotoItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  description: PropTypes.string,
  handleSelect: PropTypes.func,
};

export default PhotoItem;
