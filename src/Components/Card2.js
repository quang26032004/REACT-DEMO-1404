import React from "react";

const Card2 = () => {
  return (
    <div className="card">
      <h1 className="card__heading">Học ReactJS ở đâu?</h1>

      <div className="card__img">
        <img
          src="https://danhbaict.vn/uploads/business/product/product1658745453-B2B.jpg"
          alt="learning"
        ></img>
      </div>

      <h3 className="card__subheadind">Đây là tiêu đề của bài viết</h3>
      <p>
      Tự hào khi thuộc Hệ sinh thái công nghệ thông tin của Tập đoàn công nghệ VTI, VTI Academy có thế mạnh vượt trội về chất lượng đào tạo khi nội dung học bám sát chương trình đào tạo nội bộ của các doanh nghiệp CNTT hàng đầu Việt Nam. Với chất lượng đào tạo cùng cam kết đầu ra đã được khẳng định, 100% học viên tham gia các khóa học đều hài lòng về nội dung đào tạo, sự hỗ trợ tối đa của VTI Academy trong suốt quá trình học để đảm bảo trình độ của học viên và đồng hành cùng các bạn nhanh chóng xin việc thành công ngay sau tốt nghiệp.
      </p>
      <div className="card__btn__group">
        <button className="card__btn">Đọc thêm</button>
      </div>
    </div>
  );
};

export default Card2;
