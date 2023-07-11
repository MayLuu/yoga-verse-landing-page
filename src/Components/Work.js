import React from "react";
import PickMeals from "../Assets/clock.png";
import ChooseMeals from "../Assets/ai.png";
import DeliveryMeals from "../Assets/money.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Linh hoạt",
      text: "Ứng dụng giúp cho việc tập luyện của bạn sẵn sàng mọi lúc, mọi nơi. ",
    },
    {
      image: ChooseMeals,
      title: "Thông minh",
      text: "Tính năng hỗ trợ tập luyện tích hợp trí tuệ nhân tạo là điểm khác biệt so với ứng dụng cùng dòng ",
    },
    {
      image: DeliveryMeals,
      title: "Tiết kiệm",
      text: "Giá thành hấp dẫn dành cho mọi lứa tuổi có niềm say mê với tập luyện Yoga",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Tính năng</p>
        <h1 className="primary-heading">Điểm nổi bật</h1>
        <p className="primary-text">
          Lợi ích dành cho bạn khi trở thành người đồng hành với chúng tôi
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img className="img-work" src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
