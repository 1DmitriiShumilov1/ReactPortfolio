import React from "react";
import img_book from "../img/book.jpg";
import img_me from "../img/me.jpg";
import img_computer from "../img/computer.jpg";

const AboutMe = (props) => {
  return (
    <div className="pb-5">
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
      <div className="about-text w-60 m-auto my-5">
        <h3>Get a deeper insight into who I am as a person</h3>
        <p className="text-secondary">
          My name is Dima (short for Dmitrii) and I am 20 years old. At my free
          time I enjoy working out, reading books, and coding. Sometimes I go
          for a bike ride at the picturesque trail near my house, or just go for
          a walk after a long day.
        </p>
        <p className="text-secondary ">
          I've had some challenges in my life, like stress of moving from Russia
          to the United States, or recovering from a very severe case of
          ruptured appendix. On the other hand, I was able to recover from the
          the surgery in just 2 months, and focus on improving myself mentally
          and physically. I've worked hard to get to the place where I am now,
          and I'm willing to put more effort to become a better human and web
          developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
