/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import "./BookingModal.scss";
import { FormattedMessage } from "react-intl";
import { Modal } from "reactstrap";
import _ from "lodash";
import ProfileDoctor from "../ProfileDoctor";
import DatePicker from "../../../../components/Input/DatePicker";
import * as actions from "../../../../store/actions";
import { LANGUAGES } from "../../../../utils";
import Select from "react-select";
import { postPatientBookAppointment } from "../../../../services/userService";
import { toast } from "react-toastify";
import moment from "moment";

class BookingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      reason: "",
      birthday: "",
      selectedGender: "",
      doctorId: "",
      genders: "",
      timeType: "",
    };
  }
  async componentDidMount() {
    this.props.getGenders();
  }

  buildDataGender = (data) => {
    let result = [];
    let language = this.props.language;

    if (data && data.length > 0) {
      data.map((item) => {
        let obj = {};
        obj.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
        obj.value = item.keyMap;
        result.push(obj);
      });
    }
    return result;
  };
  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.language !== prevProps.language) {
      this.setState({
        genders: this.buildDataGender(this.props.genders),
      });
    }

    if (this.props.genders !== prevProps.genders) {
      this.setState({
        genders: this.buildDataGender(this.props.genders),
      });
    }

    if (this.props.dataTime !== prevProps.dataTime) {
      if (this.props.dataTime && !_.isEmpty(this.props.dataTime)) {
        let doctorId = this.props.dataTime.doctorId;
        let timeType = this.props.dataTime.timeType;
        this.setState({
          doctorId: doctorId,
          timeType: timeType,
        });
      }
    }
  }
  handleOnChangeInput = (e, id) => {
    let valueInput = e.target.value;
    let stateCopy = { ...this.state };

    stateCopy[id] = valueInput;
    this.setState({
      ...stateCopy,
    });
  };

  handleOnChangeDatePicker = (date) => {
    this.setState({
      birthday: date[0],
    });
  };

  handleChangeSelect = (selectedOption) => {
    this.setState({
      selectedGender: selectedOption,
    });
  };
  buildTimeBooking = (dataTime) => {
    let { language } = this.props;

    if (dataTime && !_.isEmpty(dataTime)) {
      let time =
        language === LANGUAGES.VI
          ? dataTime.timeTypeData.valueVi
          : dataTime.timeTypeData.valueEn;
      let date =
        language === LANGUAGES.VI
          ? moment.unix(+dataTime.date / 1000).format("dddd - DD/MM/YYYY")
          : moment
              .unix(+dataTime.date / 1000)
              .locale("en")
              .format("ddd - DD/MM/YYYY");

      return `${time} - ${date}`;
    }
    return <></>;
  };

  buildDoctorName = (dataTime) => {
    let { language } = this.props;
    if (dataTime && !_.isEmpty(dataTime)) {
      let name =
        language === LANGUAGES.VI
          ? `${dataTime.doctorData.lastName} ${dataTime.doctorData.firstName}`
          : `${dataTime.doctorData.firstName} ${dataTime.doctorData.lastName}`;
      return name;
    }
  };
  handleConfirmBooking = async () => {
    //validate input
    let date = new Date(this.state.birthday).getTime();
    let timeString = this.buildTimeBooking(this.props.dataTime);
    let doctorName = this.buildDoctorName(this.props.dataTime);
    let res = await postPatientBookAppointment({
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      address: this.state.address,
      reason: this.state.reason,
      date: this.props.dataTime.date,
      birthday: date,
      selectedGender: this.state.selectedGender.value,
      doctorId: this.state.doctorId,
      timeType: this.state.timeType,
      language: this.props.language,
      timeString: timeString,
      doctorName: doctorName,
    });

    if (res && res.errCode === 0) {
      toast.success("Đặt lịch hẹn thành công!");
      this.props.closeBookingClose();
    } else {
      toast.error("Khung giờ này bác sĩ đã có lịch hẹn!");
    }
  };
  render() {
    let { isOpenModal, closeBookingClose, dataTime } = this.props;
    let doctorId = "";
    if (dataTime && !_.isEmpty(dataTime)) {
      doctorId = dataTime.doctorId;
    }

    return (
      <Modal
        isOpen={isOpenModal}
        className={"booking-modal-container"}
        size="lg"
        centered
      >
        <div className="form-title-detail-doctor-container">
          <span
            style={{ cursor: "pointer" }}
            className="button-exit"
            onClick={closeBookingClose}
          >
            <i className="fas fa-times"></i>
          </span>
          <div className="doctor-infor">
            <ProfileDoctor
              isShowDescriptionDoctor={false}
              doctorId={doctorId}
              dataTime={dataTime}
              isShowLinkDetail={false}
              isShowPrice={true}
            />
          </div>

          <div className="form-fill-person-detail">
            <div className="row justify-content-center">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Họ và tên (bắt buộc)"
                    value={this.state.fullName}
                    onChange={(e) => this.handleOnChangeInput(e, "fullName")}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Số điện thoại (bắt buộc)"
                    value={this.state.phoneNumber}
                    onChange={(e) => this.handleOnChangeInput(e, "phoneNumber")}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Địa chỉ Email (bắt buộc)"
                    value={this.state.email}
                    onChange={(e) => this.handleOnChangeInput(e, "email")}
                  />
                </div>
                <div className="form-group">
                  <Select
                    value={this.state.selectedGender}
                    onChange={this.handleChangeSelect}
                    options={this.state.genders}
                  />
                </div>
                <div className="form-group">
                  <DatePicker
                    onChange={this.handleOnChangeDatePicker}
                    className="form-control"
                    id="exampleInputPassword1"
                    value={this.state.birthday}
                    placeholder="Ngày sinh (bắt buộc)"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Địa chỉ (bắt buộc)"
                    value={this.state.address}
                    onChange={(e) => this.handleOnChangeInput(e, "address")}
                  />
                </div>
                <textarea
                  name="reason_other"
                  className="dauvao-nhap"
                  placeholder="Lý do khám"
                  value={this.state.reason}
                  onChange={(e) => this.handleOnChangeInput(e, "reason")}
                ></textarea>
              </form>
            </div>
            <div className="booking-modal-footer">
              <button
                style={{ marginTop: "15px" }}
                className="btn-btn-confirm"
                onClick={() => this.handleConfirmBooking()}
              >
                Submit
              </button>
              <button
                style={{ marginTop: "15px" }}
                type="cancel"
                className="btn-btn-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
    genders: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGenders: () => dispatch(actions.fetchGenderStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
