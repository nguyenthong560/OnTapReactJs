import React, { Component } from "react";
import "./BaiTapGameXucSac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucSac from "./XucSac";
import { connect } from "react-redux";
class BaiTapGameXucSac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Game Đổ Xúc Sắc
        </div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button className="btnGame" onClick={this.props.datCuoc(false)}>
              TÀI
            </button>
          </div>
          <div className="col-2">
            <XucSac></XucSac>
          </div>
          <div className="col-5">
            <button className="btnGame">XỈU</button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi></ThongTinTroChoi>
          <button
            className="btn btn-info p-2 mt-4 "
            onClick={this.props.playGame}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      //Tạo action tài xĩu
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      // Gửi lên reducer
      dispatch(action);
    },
    playGame: () => {
      //Gủi giữ liệu type PLAY_GAME lên reducer
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameXucSac);
