import React from "react";

const Card3 = () => {
  return (
    <div className="card">
      <h1 className="card__heading">Học ReactJS trong bao lâu?</h1>

      <div className="card__img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYO1xYL6m8O25Si3gHXZybP_xLZ636lA7Czsu11Jf8jA&s"
          alt="learning"
        ></img>
      </div>

      <h3 className="card__subheadind">Đây là tiêu đề của bài viết</h3>
      <p>
        Học ReactJS có thể mất từ 1 đến 6 tháng tùy thuộc vào khả năng học của
        mỗi người. Để học ReactJS bạn cần có kiến thức cơ bản về HTML, CSS và
        JavaScript.
      </p>
      <div className="card__btn__group">
        <button className="card__btn">Đọc thêm</button>
      </div>
    </div>
  );
};

export default Card3;
