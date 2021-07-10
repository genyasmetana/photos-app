import {
  GET_PHOTOS_ERROR,
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
  GET_LIKED_PHOTOS_SUCCESS,
  GET_LIST_PHOTOS_SUCCESS,
  SET_LIKE_STATUS,
} from "../actions";

const initialState = {
  photos: [],
  likedPhotos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_SUCCESS:
    case SET_LIKE_STATUS:
      return {
        ...state,
        ...action.payload,
      };

    case GET_LIKED_PHOTOS_SUCCESS:
      return {
        ...state,
        likedPhotos: action.payload,
      };

    case GET_LIST_PHOTOS_SUCCESS:
      return {
        ...state,
      };

    case GET_PHOTOS_ERROR:
    case GET_PHOTOS_START:
    default:
      return state;
  }
}
