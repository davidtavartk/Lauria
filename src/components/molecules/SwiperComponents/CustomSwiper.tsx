import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import SwiperCard from "./SwiperCard";
import { reviews } from "@/data";

import "swiper/css";
import { Pagination } from "swiper/modules";

const CustomSwiper = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1020);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    if (!isLargeScreen) {
        setCurrentGroup(swiper.activeIndex);
    } else {
        setCurrentGroup(Math.floor(swiper.activeIndex / 2))
    }
  };

  const handleBoxClick = (index: number) => {
    setCurrentGroup(index);
    if (!isLargeScreen) {
        swiperRef.current?.swiper.slideTo(index);
    } else {
      swiperRef.current?.swiper.slideTo(index * 2);
    }
  };

  const slidesPerView = isLargeScreen ? 2 : 1;
  const totalGroups = Math.ceil(reviews.length / 2);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerGroup={slidesPerView}
        slidesPerView={slidesPerView}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        navigation={{}}
        onSlideChange={handleSlideChange}
        breakpoints={{
          1020: {
            slidesPerView: 2,
          },
        }}
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <SwiperCard
              text={item.text}
              name={item.name}
              honorific={item.honorific}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="m-auto mt-6 flex max-w-[230px] items-center justify-between gap-2">
      {isLargeScreen
    ? Array.from({ length: totalGroups }).map((_, index) => (
        <div
          key={index}
          className={`size-5 cursor-pointer ${
            index === currentGroup ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleBoxClick(index)}
        />
      ))
    : reviews.map((_, index) => (
        <div
          key={index}
          className={`size-5 cursor-pointer ${
            index === currentGroup ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={() => handleBoxClick(index)}
        />
      ))}
      </div>
    </div>
  );
};

export default CustomSwiper;
