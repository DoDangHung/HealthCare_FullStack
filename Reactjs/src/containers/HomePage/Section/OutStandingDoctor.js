/** @format */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "../../../store/actions";
import { LANGUAGES } from "../../../utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "././OutStandingDoctor.scss";
import { FormattedMessage } from "react-intl";

const OutStandingDoctor = (props) => {
  const [arrDoctors, setArrDoctors] = useState([]);

  useEffect(() => {
    props.loadTopDoctors();
  }, []);

  useEffect(() => {
    if (props.topDoctorRedux !== arrDoctors) {
      setArrDoctors(props.topDoctorRedux);
    }
  }, [props.topDoctorRedux]);

  const handleViewDetailDoctor = (doctor) => {
    props.history.push(`/detail-doctor/${doctor.id}`);
  };

  console.log("check props topDoctorRedux", props.topDoctorRedux);
  let allDoctors = arrDoctors;
  let { language } = props;
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
        <div className="section-container" style={{ margin: "0 65px" }}>
          <div className="section-header">
            <span className="title-section">
              <FormattedMessage id="homepage.outstanding-doctor" />
            </span>
            {/* <button className='btn-section'>
                        <FormattedMessage id="homepage.more-infor" />
                    </button> */}
          </div>
          <div className="section-body">
            <Slider {...props.settings}>
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
                      onClick={() => handleViewDetailDoctor(item)}
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
};

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
