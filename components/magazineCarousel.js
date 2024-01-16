"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slide_image =
  "https://rukminim2.flixcart.com/image/850/1000/jdeu8i80/magazine/u/2/q/0973964-vogue-original-imaf23txvgsnzf7b.jpeg?q=90";
import "../styles/swiper.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Container from "./container";
import Image from "next/image";

const MagazineCarousel = () => {
  return (
    <Container className="p-0">
      <div className="flex items-center justify-around gap-11 ">
        <h1 className="mx-auto text-xl font-bold">
          AMERICAS EDITIONS
        </h1>
        <p className=" line-clamp-3 max-w-prose overflow-hidden">
          As a region has developed rapidly with a Rising Economy.
          With a strong desire to start a business, American
          individuals have risen as the Unicorns ruling the Business
          World. The Enterprise World features the stories of these
          individuals in our special Americas edition.
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container">
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/img/magazine-cover.jpg"
            width={1000}
            height={1000}
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </Container>
  );
};

export default MagazineCarousel;
