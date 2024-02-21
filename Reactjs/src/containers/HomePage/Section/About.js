/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import "././About.scss";

class About extends Component {
  render() {
    return (
      <>
        <div className="about-section">
          <div className="about-header">
            <div className="about-content">
              <div className="about-content-right">
                <div className="text-content">
                  <span>Công ty Cổ phần Công nghệ BookingCare</span>
                  <ul>
                    <li>
                      <span>
                        Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng
                        Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                      </span>
                    </li>
                    <li>
                      <span>
                        Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng
                        Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                      </span>
                    </li>
                    <li>
                      <span>
                        Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng
                        Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
                      </span>
                    </li>
                  </ul>
                  <span>Văn phòng tại TP Hồ Chí Minh</span>
                  <ul>
                    <li>
                      <span>Số 01, Hồ Bá Kiện, Phường 15, Quận 10</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-content-center">center</div>
              <div className="about-content-left">left</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
