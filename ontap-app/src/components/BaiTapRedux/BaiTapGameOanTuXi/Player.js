import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="text-center playGame">
        <div className="theThink">
          <img
            width={75}
            height={75}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            className="mt-3"
          ></img>
        </div>
        <div className="speech-bubble mt-2"></div>

        <img
          src="./gameOanTuXi/player.png"
          alt="player.png"
          style={({ width: 170 }, { height: 170 })}
        ></img>

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            // Xét thêm giá trị đặt cược thêm viền cho item được chọn
            let border = {};
            if (item.datCuoc) {
              border = { border: "3px solid orange" };
            }

            return (
              <div className="col-4">
                <button
                  onClick={() => {
                    this.props.datCuoc(item.ma);
                  }}
                  style={border}
                  className="btnItem"
                >
                  <img width={35} height={35} src={item.hinhAnh}></img>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
