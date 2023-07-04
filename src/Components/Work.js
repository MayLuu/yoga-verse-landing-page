import React from "react";
import PickMeals from "../Assets/clock.png";
import ChooseMeals from "../Assets/ai.png";
import DeliveryMeals from "../Assets/money.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Linh hoạt",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      title: "Thông minh",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      title: "Tiết kiệm",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
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
