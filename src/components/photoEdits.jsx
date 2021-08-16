//import React from "react";
//import img_first_before from "../img/photoshop/1_before.jpg";
//import img_first_after from "../img/photoshop/1_after.jpg";
//import img_second_before from "../img/photoshop/2_before.jpg";
//import img_second_after from "../img/photoshop/2_after.jpg";
//import "react-slideshow-image/dist/styles.css";
//
//const PhotoEdits = () => {
//  return (
//    <div id="photoshop" className="testing">
//      <h1 className="text-center my-5 main-title">Photoshop skills</h1>
//      <table className="wrapper">
//        <tr>
//          <td>
//            <img class="img-photoshop" src={img_first_before} alt="1_before" />
//          </td>
//          <td>
//            <img class="img-photoshop" src={img_first_after} alt="1_after" />
//          </td>
//        </tr>
//        <tr>
//          <td>
//            <img class="img-photoshop" src={img_second_before} alt="2_before" />
//          </td>
//          <td>
//            <img class="img-photoshop" src={img_second_after} alt="2_after" />
//          </td>
//        </tr>
//      </table>
//      <center>
//        Big thanks to{" "}
//        <a href="https://www.signatureedits.com">Signature Edits</a> for the
//        first photo.
//      </center>
//    </div>
//  );
//};

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img_first_before from "../img/photoshop/1_before.jpg";
import img_first_after from "../img/photoshop/1_after.jpg";
import img_second_before from "../img/photoshop/2_before.jpg";
import img_second_after from "../img/photoshop/2_after.jpg";

const PhotoEdits = () => {
  return (
    <div id="photoshop" className="slide-container">
      <h1 className="text-center my-5 main-title">Photoshop skills</h1>
      <Slide autoplay={false} transitionDuration="750">
        <div className="each-slide">
          <img
            className="img-photoshop"
            src={img_first_before}
            alt="1_before"
          />
        </div>
        <div className="each-slide">
          <img className="img-photoshop" src={img_first_after} alt="1_after" />
        </div>
      </Slide>
      <Slide autoplay={false} transitionDuration="750">
        <div className="each-slide">
          <img
            className="img-photoshop"
            src={img_second_before}
            alt="2_before"
          />
        </div>
        <div className="each-slide">
          <img className="img-photoshop" src={img_second_after} alt="2_after" />
        </div>
      </Slide>
      <center>
        Big thanks to{" "}
        <a href="https://www.signatureedits.com">Signature Edits</a> for the
        first photo.
        <br />
      </center>
    </div>
  );
};
export default PhotoEdits;
