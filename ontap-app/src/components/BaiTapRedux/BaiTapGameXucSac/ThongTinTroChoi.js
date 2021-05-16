import React, { Component } from "react";
import { connect } from "react-redux";
import "./BaiTapGameXucSac.css";

class ThongTinTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="thongTin">
          BẠN CHỌN:{" "}
          <span className="text-danger">
            {this.props.taiXiu ? "TÀI" : "XỈU"}
          </span>
        </div>

        <div className="thongTin">
          BÀN THẮNG:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>

        <div className="thongTin">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-warning">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.BaiTapXucSacReducer.taiXiu,
    soBanThang: state.BaiTapXucSacReducer.soBanThang,
    tongSoBanChoi: state.BaiTapXucSacReducer.soBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinTroChoi);
