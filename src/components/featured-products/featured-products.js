import React from 'react';
import {SwiperSlide, Swiper} from "swiper/swiper-react";
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import photo from "../img/back.jpeg"
import SwiperCore, {A11y, Autoplay, Navigation, Pagination} from "swiper";


SwiperCore.use([Navigation, Pagination, Autoplay, A11y])
const FeaturedProducts = () => {

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop
            autoplay
        >
            <SwiperSlide><img src={photo} alt=""/></SwiperSlide>
            <SwiperSlide><img src={photo} alt=""/></SwiperSlide>
            <SwiperSlide><img src={photo} alt=""/></SwiperSlide>
            <SwiperSlide><img src={photo} alt=""/></SwiperSlide>
        </Swiper>
    );
};

export default FeaturedProducts;