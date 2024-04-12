import React from "react";

const CardComponent = () => {
  return (
    <div className="card">
      <h1 className="card__heading">Học ReactJS có khó không?</h1>

      <div className="card__img">
        <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200309202057/How-To-Learn-ReactJS-A-Complete-Guide-For-Beginners.jpg"
          alt="learning"
        ></img>
      </div>

      <h3 className="card__subheadind">Đây là tiêu đề của bài viết</h3>
      <p>
        ReactJS là một thư viện JavaScript phổ biến được sử dụng rộng rãi để xây
        dựng các ứng dụng web động. ReactJS được phát triển bởi Facebook và được
        giới thiệu lần đầu tiên vào năm 2011.
      </p>
      <div className="card__btn__group">
        <button className="card__btn">Đọc thêm</button>
      </div>
    </div>
  );
};

export default CardComponent;
