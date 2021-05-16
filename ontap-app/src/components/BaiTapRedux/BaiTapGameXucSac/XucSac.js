import React, { Component } from "react";
import { connect } from "react-redux";

class XucSac extends Component {
  renderXucSac = () => {
    return this.props.mangXucSac.map((xucSac, index) => {
      return (
        <img
          key={index}
          src={xucSac.hinhAnh}
          alt={xucSac.hinhAnh}
          style={{ width: 40, height: 40 }}
          className="ml-2"
        />
      );
    });
  };
  render() {
    return <div>{this.renderXucSac()}</div>;
  }
}

// Hàm lấy state từ redux về thành props component

const mapStateToProps = (state) => {
  return {
    mangXucSac: state.BaiTapXucSacReducer.mangXucSac,
  };
};

export default connect(mapStateToProps, null)(XucSac);
