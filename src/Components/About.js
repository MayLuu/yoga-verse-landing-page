import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Về chúng tôi</p>
        <h1 className="primary-heading">
          Yoga Verse là giải pháp thông minh cho việc tập Yoga tại gia
        </h1>
        <p className="primary-text">
          Yoga Verse được xây dựng dựa trên một hệ thống nhận dạng tư thế yoga đột phá, được xây dựng dựa trên một hệ thống nhận dạng tư thế yoga đột phá,giúp bạn thực hiện các tư thế yoga chính xác và tự tin hơn từng ngày
        </p>
        {/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div className="about-buttons-container">
          <button className="secondary-button">Tìm hiểu thêm</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Xem video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
