/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "././Specialty.scss";

class Specialty extends Component {
  render() {
    let settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
    };

    return (
      <>
        <div className="specialty-section">
          <div className="specialty-content">
            <div className="specialty-container">
              <div className="specialty-header">
                <span>Chuyên khoa</span>
                <button className="btn-section">Xem them</button>
              </div>
              <div className="specialty-body">
                <Slider {...settings}>
                  <div className="img-content">
                    <div className="bg-img"></div>
                    <div>Cơ xương khớp 1</div>
                  </div>
                  <div className="img-content">
                    <div className="bg-img"></div>
                    <div>Cơ xương khớp 1</div>
                  </div>
                  <div className="img-content">
                    <div className="bg-img"></div>
                    <div>Cơ xương khớp 1</div>
                  </div>
                  <div className="img-content">
                    <div className="bg-img"></div>
                    <div>Cơ xương khớp 1</div>
                  </div>
                  <div className="img-content">
                    <div className="bg-img"></div>
                    <div>Cơ xương khớp 1</div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
