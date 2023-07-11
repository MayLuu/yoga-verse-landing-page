
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
                "Khi chúng ta kết hợp thân, tâm và trí trong quá trình tập yoga, chúng ta tạo ra một sự cân bằng tổng thể và tạo điều kiện để trạng thái hạnh phúc và trạng thái tĩnh lặng tồn tại. Yoga giúp chúng ta giải phóng căng thẳng và lo lắng, tăng cường sức khỏe và giúp chúng ta tận hưởng cuộc sống một cách sâu sắc",
            icon: BlogOne,
        },
        {
            title: "Walking",
            description:
                "Tư thế Đứng trên vai, hay còn được gọi là Sarvangasana, là một tư thế đảo ngược với cơ thể được nâng lên và được dựa trên vai. Tư thế này có nhiều lợi ích, bao gồm cải thiện tuần hoàn máu, thư giãn cơ và tăng cường sức mạnh cơ trên vai và cổ.",
            icon: BlogTwo,
        },
        {
            title: "Weights",
            description:
                "Yoga được coi là một phương pháp tập luyện tâm linh có nguồn gốc từ Ấn Độ cổ đại, kéo dài hàng ngàn năm. Cơ sở triết lý của Yoga nằm trong các bài học của 'Yoga Sutra'- một tác phẩm cổ điển của Veda Valmiki, một nhà triết học và nhà thơ Ấn Độ. Yoga Sutra định nghĩa yoga là kiểm soát ý thức để đạt được sự tự do tinh thần.",
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
            <img className="carousel-img" src={item.icon} alt="ok" />
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
