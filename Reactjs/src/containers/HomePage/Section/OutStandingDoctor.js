/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../store/actions";
import { LANGUAGES, path } from "../../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "././OutStandingDoctor.scss";
import { FormattedMessage } from "react-intl";

class OutStandingDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrDoctors: [],
    };
  }
  componentDidUpdate = (prevProps, prevSate, snapshot) => {
    if (prevProps.topDoctorRedux !== this.props.topDoctorRedux) {
      this.setState({
        arrDoctors: this.props.topDoctorRedux,
      });
    }
  };
  componentDidMount = () => {
    this.props.loadTopDoctors();
  };
  handleViewDetailDoctor = (doctor) => {
    console.log("view infor doctor", doctor);
    this.props.history.push(`/detail-doctor/${doctor.id}`);
  };
  render() {
    console.log("check props topDoctorRedux", this.props.topDoctorRedux);
    let allDoctors = this.state.arrDoctors;
    let { language } = this.props;
    allDoctors = allDoctors.concat(allDoctors).concat(allDoctors);
    let settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <>
        <div className="section-share section-outstanding-doctor">
          <div className="section-container">
            <div className="section-header">
              <span className="title-section">
                <FormattedMessage id="homepage.outstanding-doctor" />
              </span>
              {/* <button className='btn-section'>
                            <FormattedMessage id="homepage.more-infor" />
                        </button> */}
            </div>
            <div className="section-body">
              <Slider {...this.props.settings}>
                {allDoctors &&
                  allDoctors.length > 0 &&
                  allDoctors.map((item, index) => {
                    let imageBase64 = "";
                    if (item.image) {
                      imageBase64 = new Buffer(item.image, "base64").toString(
                        "binary"
                      );
                    }
                    let nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
                    let nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
                    // let nameSpecialty = getDoctorNameBySpecialtyId(`${item.id}`);
                    // console.log('check name ', nameSpecialty.data);
                    return (
                      <div
                        className="section-customize"
                        key={index}
                        onClick={() => this.handleViewDetailDoctor(item)}
                      >
                        <div className="customize-border">
                          <div className="outer-bg">
                            <div
                              className="bg-image section-outstading-doctor"
                              style={{ backgroundImage: `url(${imageBase64})` }}
                            />
                          </div>
                          <div className="position text-center">
                            <div>
                              {language === LANGUAGES.VI ? nameVi : nameEn}
                            </div>
                            {/* <div>{nameSpecialty.data}</div> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    isLoggedIn: state.user.isLoggedIn,
    topDoctorRedux: state.admin.topDoctors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTopDoctors: () => dispatch(actions.fetchTopDoctor()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor)
);
