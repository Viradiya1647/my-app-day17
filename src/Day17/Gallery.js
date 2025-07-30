import { useState, useRef } from "react";
import useClickOutside from "../Day16/useClickOutside";

export default function Gallery() {
  const images = [
    "https://picsum.photos/id/1011/300/200",
    "https://picsum.photos/id/1012/300/200", 
    "https://picsum.photos/id/1023/300/200",
    "https://picsum.photos/id/1014/300/200",
    "https://picsum.photos/id/1015/300/200",
    "https://picsum.photos/id/1016/300/200",
    "https://picsum.photos/id/1018/300/200",
    "https://picsum.photos/id/1019/300/200",
    "https://picsum.photos/id/1020/300/200",
    "https://picsum.photos/id/1021/300/200",
    "https://picsum.photos/id/1022/300/200",
    "https://picsum.photos/id/1023/300/200",
    "https://picsum.photos/id/1024/300/200",
    "https://picsum.photos/id/1025/300/200",
    "https://picsum.photos/id/1026/300/200",
    "https://picsum.photos/id/1027/300/200",
    "https://picsum.photos/id/1028/300/200",
    "https://picsum.photos/id/1029/300/200",
    "https://picsum.photos/id/1042/300/200",
    "https://picsum.photos/id/1031/300/200",
    "https://picsum.photos/id/1032/300/200",
    "https://picsum.photos/id/1033/300/200",
    "https://picsum.photos/id/1041/300/200",
    "https://picsum.photos/id/1035/300/200",
    "https://picsum.photos/id/1036/300/200",
    "https://picsum.photos/id/1037/300/200",
    "https://picsum.photos/id/1038/300/200",
    "https://picsum.photos/id/1039/300/200",
    "https://picsum.photos/id/1040/300/200",
    "https://picsum.photos/id/1043/300/200",
  ];
  const [selectImage, setSelectImage] = useState(null);
  const modalRef = useRef(null);

  const handleClick = (image) => {
    setSelectImage(image);
  };

  const handleClose = () => {
    setSelectImage(null);
  };

  useClickOutside(modalRef, () => {
    if (selectImage) setSelectImage(null);
  });

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Image Gallery 1</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            className="gallery-image"
            src={image}
            alt="img not found"
            width="150"
            height="100"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>

      {selectImage && (
        <div className="gallery-modal">
          <div ref={modalRef}>
            <img className="gallery-modal-image" src={selectImage} alt="Full view" />
            <br />
            <button className="gallery-close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}



