import PhotoList from "./components/photo-list";

import "./photosList.scss";

export default function PhotosList() {
  const photoList = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      liked: false,
    },
    {
      albumId: 2,
      id: 2,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      liked: true,
    },
    {
      albumId: 3,
      id: 3,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
      liked: false,
    },
  ];
  return (
    <div>
      <h2>Photo List</h2>
      <PhotoList photoList={photoList} />
    </div>
  );
}
