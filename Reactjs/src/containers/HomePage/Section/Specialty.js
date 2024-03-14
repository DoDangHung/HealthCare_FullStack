/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "././Specialty.scss";
import { getAllSpecialty } from "../../../services/userService";

class Specialty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSpecialty: [],
    };
  }

  async componentDidMount() {
    let res = await getAllSpecialty();
    console.log("check chuyen khoa", res);
    if (res && res.errCode === 0) {
      this.setState({
        dataSpecialty: res.data ? res.data : [],
      });
    }
  }
  render() {
    let { dataSpecialty } = this.state;
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
                <Slider {...this.props.settings}>
                  {dataSpecialty &&
                    dataSpecialty.length > 0 &&
                    dataSpecialty.map((item, index) => {
                      return (
                        <div className="img-content" key={index}>
                          <div
                            className="bg-img"
                            style={{ backgroundImage: `url(${item.image})` }}
                          ></div>
                          <div className="text-content">{item.name}</div>
                        </div>
                      );
                    })}
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
