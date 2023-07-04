import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import MobileHomeImage from "../Assets/mobile-home.png";
import Navbar from "./Navbar";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Trở thành giáo viên Yoga của chính bạn
          </h1>
          <p className="primary-text">
            Yoga là điệu nhảy của mỗi tế bào trên cơ thể, với âm nhạc là hơi thở tạo nên sự thanh thản và hài hòa bên trong tâm hồn
          </p>

          <button className="secondary-button">
            <a className="download-link" href="https://firebasestorage.googleapis.com/v0/b/yoga-verse.appspot.com/o/app-release.apk?alt=media&token=5c1eb3c5-dfca-459c-866b-7c44e7b2413b">Tải ứng dụng ngay <FiDownload /></a>{" "}
          </button>
        </div>
        <div className="home-image-section ">
          <img className="mobile-image" src={MobileHomeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
