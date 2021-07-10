import {
  getLocalLikedPhotos,
  setLocalLikedPhotos,
} from "../../../libs/utilities/GetLikedPhotos";

export const GET_PHOTOS_START = "GET_PHOTOS_START";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_ERROR = "GET_PHOTOS_ERROR";

export const GET_LIKED_PHOTOS_SUCCESS = "GET_LIKED_PHOTOS_SUCCESS";
export const GET_LIST_PHOTOS_SUCCESS = "GET_LIKED_PHOTOS_SUCCESS";

export const SET_LIKE_STATUS = "SET_LIKE_STATUS";

const setLikedStatus = (data) => {
  const localLikedPhotos = getLocalLikedPhotos();
  return data.map((el) => {
    const isLike = localLikedPhotos.some((item) => item.id === el.id);
    return {
      ...el,
      liked: isLike,
    };
  });
};

export const getPhotosListAction = () => (dispatch) => {
  dispatch({ type: GET_PHOTOS_START });
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
      const likedPhotos = getLocalLikedPhotos();

      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: {
          photos: setLikedStatus(data),
          likedPhotos,
        },
      });
    })
    .catch((e) => {
      dispatch({
        type: GET_PHOTOS_ERROR,
      });
      console.log(e);
    });
};

export const likedPhotosAction = () => (dispatch) => {
  dispatch({
    type: GET_LIKED_PHOTOS_SUCCESS,
    payload: getLocalLikedPhotos(),
  });
};

export const photoListAction = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: GET_LIST_PHOTOS_SUCCESS,
    payload: state.photosList?.photos,
  });
};

export const setLikeStatusAction = (element) => (dispatch, getState) => {
  const state = getState();

  if (element.liked) {
    const localPhotos = getLocalLikedPhotos();
    element.liked = false;
    const filterLocalLikes = localPhotos.filter(
      (item) => item.id !== element.id
    );
    setLocalLikedPhotos(filterLocalLikes);
  } else {
    element.liked = true;
    setLocalLikedPhotos([...getLocalLikedPhotos(), element]);
  }

  dispatch({
    type: SET_LIKE_STATUS,
    payload: {
      photos: setLikedStatus(state.photosList.photos),
      likedPhotos: getLocalLikedPhotos(),
    },
  });
};
