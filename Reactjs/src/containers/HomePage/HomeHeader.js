/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { LANGUAGES } from "../../utils";
import { changeLanguageApp } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { searchSpecialtyByName } from "../../services/userService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeHeader.scss";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultList";
import NavBar from "./Navbar";
class HeaderHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  render() {
    let settings = {
      dots: true,
      lazyLoad: true,

      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
      autoplay: true,
      speed: 2000,
      cssEase: "linear",
    };
    let importAll = (r) => {
      let images = {};
      r.keys().map((item, index) => {
        return (images[item.replace("./", "")] = r(item));
      });
      return images;
    };
    const images = importAll(
      require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
    );

    let language = this.props.language;

    return (
      <>
        <NavBar />
        {this.props.isShowBanner === true && (
          <div className="home-banner">
            <div className="title-banner">
              <Slider {...settings}>
                <div>
                  <img src={images["banner.png"].default} alt="" />
                </div>
                <div>
                  <img src={images["banner-2.jpg"].default} alt="" />
                </div>
              </Slider>
            </div>
            <div className="title"></div>
            <div className="home-section">
              <div className="title-section">
                <p>Dành Cho Bạn</p>
              </div>
              <div className="content-section">
                <div className="options-section">
                  <div className="banner-section"></div>
                  <div className="option-child">
                    <div className="img-child">
                      <img
                        src="https://cdn.bookingcare.vn/fo/w384/2023/11/01/141017-csyt.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="text-child">Cơ sở y tế</div>
                  </div>
                  <div className="option-child">
                    <div className="img-child">
                      <img
                        src="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140234-bac-si.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="text-child">Bác sĩ</div>
                  </div>
                  <div className="option-child">
                    <div className="img-child">
                      <img
                        src="https://cdn.bookingcare.vn/fo/w384/2023/11/01/140537-chuyen-khoa.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="text-child">Chuyên khoa</div>
                  </div>
                  <div className="option-child">
                    <div className="img-child">
                      <img
                        src="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-4.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="text-child">Y tế nổi bật</div>
                  </div>
                  <div className="option-child">
                    <div className="img-child">
                      <img
                        src="https://cdn.bookingcare.vn/fo/w640/2024/01/12/144801-3.png"
                        alt=""
                      ></img>
                    </div>
                    <div className="text-child">Được quan tâm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderHome)
);
