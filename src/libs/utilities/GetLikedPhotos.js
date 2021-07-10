export const getLocalLikedPhotos = () =>
  JSON.parse(window.localStorage.getItem("favorites")) || [];

export const setLocalLikedPhotos = (data) =>
  window.localStorage.setItem("favorites", JSON.stringify(data));
