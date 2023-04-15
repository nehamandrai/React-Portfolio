import "./testomonial.css";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function Testomonial() {
  return (
    <section id="Testomonial">
      <h5 className="text-white text-2xl text-center ">my own achivements</h5>
      <h2 className="text-sky-500 text-4xl text-center  mb-4">
        Certifications
      </h2>
      <Swiper
        className="container testomonial_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="client">
          <div className="client_avatar">
            <img src="../" alt="Me" />
          </div>
          <h5 className="client_name">React.js</h5>
          <small className="client_review">
            Certified React JS Developer form HackerRank skilled in building
            scalable web apps. Proficient in creating dynamic UIs and optimizing
            performance for enhanced user experience.
          </small>
        </SwiperSlide>

        <SwiperSlide className="client">
          <div className="client_avatar">
            <img src="../" alt="Me" />
          </div>
          <h5 className="client_name">JavaScript</h5>
          <small className="client_review">
            My certification from Freecodecamp has equipped me with the ability
            to build dynamic web applications and solve complex problems using
            JavaScript.
          </small>
        </SwiperSlide>

        <SwiperSlide className="client">
          <div className="client_avatar ">
            <img src="" className="mr-4" alt="Me" />
          </div>
          <h5 className="client_name">React Essential Training</h5>
          <small className="client_review">
            Essential Training for Building Robust Web Applications with React.
            Become proficient in developing scalable and efficient web
            interfaces with React.
          </small>
        </SwiperSlide>
        <SwiperSlide className="client">
          <div className="client_avatar">
            <img src="" alt="Me" />
          </div>
          <h5 className="client_name">CSS</h5>
          <small className="client_review">
            I am a certified in CSS and skilled in designing and styling web
            applications for optimal user experience using my expertise in
            Tailwind CSS frameworks.{" "}
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
