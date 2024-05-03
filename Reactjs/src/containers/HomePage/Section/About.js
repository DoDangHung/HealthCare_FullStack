/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import "././About.scss";

class About extends Component {
  render() {
    return (
      <>
        <div className="section-container">
          <div className="row">
            <div className="about-section ">
              <div className="about-header">
                <div className="about-content">
                  <div className="about-content-left col-5">
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
                            ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày
                            16/03/2015
                          </span>
                        </li>
                        <li>
                          <span>024-7301-2468 (7h - 18h)</span>
                        </li>
                        <li>
                          <span>support@digitalCare.vn (7h - 18h)</span>
                        </li>
                      </ul>
                      <span>Văn phòng tại TP Hồ Chí Minh</span>
                      <ul>
                        <li>
                          <span>
                            Tòa nhà H3, 384 Hoàng Diệu, Phường 6, Quận 4, TP.HCM
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-content-center col-3">
                    <div className="content-title-center">
                      <span>Digital Care</span>
                    </div>
                    <div className="content-infor">
                      <ul>
                        <li>Tuyển dụng</li>
                        <li>Chính sách bảo mật</li>
                        <li>Quy chế hoạt động</li>
                        <li>Liên hệ đối tác</li>
                        <li>Điều khoản sử dụng</li>
                        <li>Câu hỏi thường gặp</li>
                      </ul>
                    </div>
                  </div>
                  <div className="about-content-right col-4 ">
                    <ul>
                      <div className="content-title-right">
                        <span>Đối tác bảo trợ nội dung</span>
                      </div>
                      <li>
                        <div
                          class="container-ct"
                          style={{ display: "inline-block" }}
                        >
                          <div
                            class="content-ct"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="https://cdn.bookingcare.vn/fo/w96/2023/09/08/093706-hellodoctorlogo.png"
                              alt="Your Image"
                            />
                            <div class="text-ct" style={{ marginLeft: "10px" }}>
                              <p style={{ margin: "0" }}>Hello Doctor</p>
                              <p style={{ margin: "0" }}>
                                Bảo trợ chuyên mục nội dung "sức khỏe tinh thần"
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="container-ct"
                          style={{ display: "inline-block" }}
                        >
                          <div
                            class="content-ct"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="https://cdn.bookingcare.vn/fo/w96/2023/09/08/093706-hellodoctorlogo.png"
                              alt="Your Image"
                            />
                            <div class="text-ct" style={{ marginLeft: "10px" }}>
                              <p style={{ margin: "0" }}>
                                Hệ thống y khoa chuyên sâu quốc tế Bernard
                              </p>
                              <p style={{ margin: "0" }}>
                                Bảo trợ chuyên mục nội dung "y khoa chuyên sâu"
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          class="container-ct"
                          style={{ display: "inline-block" }}
                        >
                          <div
                            class="content-ct"
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <img
                              src="https://cdn.bookingcare.vn/fo/w96/2023/09/08/093706-hellodoctorlogo.png"
                              alt="Your Image"
                            />
                            <div class="text-ct" style={{ marginLeft: "10px" }}>
                              <p style={{ margin: "0" }}>
                                Doctor Check - Tầm Soát Bệnh Để Sống Thọ Hơn
                              </p>
                              <p style={{ margin: "0" }}>
                                Bảo trợ chuyên mục nội dung "sức khỏe tổng quát"
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
