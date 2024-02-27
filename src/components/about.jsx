import React from "react";
import img_book from "../img/book.jpg";
import img_me from "../img/me.jpg";
import img_computer from "../img/computer.jpg";

const AboutMe = (props) => {
  return (
    <div id="about" className="pb-5">
      <h1 className="text-center main-title py-4">About me</h1>
      <div
        className={
          window.innerWidth < 500
            ? props.classes + " img-phone-support"
            : props.classes
        }
      >
        <img className="about-image" src={img_book} alt="book" />
        <img className="about-image" src={img_me} alt="me" />
        <img className="about-image" src={img_computer} alt="computer" />
      </div>
      <div className="about-text m-auto my-5">
        <h3>Get a deeper insight into who I am</h3>
        <p className="text-secondary">
          My name is Dima (short for Dmitrii) and I am 22 years old. At my free
          time I enjoy working out, spending time with friends, and coding. Sometimes 
          I go for a bike ride at the picturesque trail near my house, or just go for
          a walk after a long day.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
