import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning mb-1 ketQua">
          {this.props.ketQua}
        </div>
        <div className="display-4 text-success mb-1 ketQua">
          SỐ BÀN THẮNG:{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4 text-success ketQua">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapOanTuXiReducer.soBanThang,
    soBanChoi: state.BaiTapOanTuXiReducer.soBanChoi,
  };
};

export default connect(mapStateToProps, null)(KetQuaTroChoi);
