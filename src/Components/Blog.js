
import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import BlogOne from "../Assets/blog-1.jpg";
import BlogTwo from "../Assets/blog-2.jpg";
import BlogThree from "../Assets/blog-3.jpg";

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            title: "Baseball",
            description:
                "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
            icon: BlogOne,
        },
        {
            title: "Walking",
            description:
                "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
            icon: BlogTwo,
        },
        {
            title: "Weights",
            description:
                "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
            icon: BlogThree,
        },
    ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
    };
    return (
        <div className="carousel">
            <div
                className="inner"
                style={{
                    transform: `translate(-${activeIndex * 100}%)`
                }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} width={"100%"} />;
                })}
            </div>

            <div className="carousel-buttons">
                <button
                    className="button-arrow"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    <span class="material-symbols-outlined"><AiOutlineArrowLeft /></span>{" "}
                </button>
                <div className="indicators">
                    {items.map((item, index) => {
                        return (
                            <button
                                className="indicator-buttons"
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                                <span
                                    className={`material-symbols-outlined ${index === activeIndex
                                        ? "indicator-symbol-active"
                                        : "indicator-symbol"
                                        }`}
                                >
                                    {index === activeIndex ? <AiTwotoneHeart /> : <AiOutlineHeart />}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <button
                    className="button-arrow"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    <span class="material-symbols-outlined"><AiOutlineArrowRight /></span>
                </button>
            </div>
        </div>
    );
};
export const CarouselItem = ({ item, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <div></div>
            <img width="100px" height="100px" className="carousel-img" src={item.icon} alt="ok" />
            <div className="carousel-item-text">{item.description}</div>
        </div>
    );
};
export const Blog = () => {

    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Cộng đồng</p>
                <h1 className="primary-heading">Bài chia sẻ bổ ích</h1>
                <p className="primary-text">
                    Những bài viết được cập nhật hàng ngày sẽ giúp bạn hiểu thêm về Yoga
                </p>
            </div>
            <div className="work-section-bottom">

                <Carousel />
            </div>
        </div>
    );
};

export default Blog;
