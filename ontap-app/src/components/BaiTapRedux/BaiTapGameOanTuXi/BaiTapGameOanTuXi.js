import React, { Component } from "react";
import "./BaiTapGameOanTuXi.css";
import Computer from "./Computer";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import { connect } from "react-redux";

class BaiTapGameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4 mt-3">
            <Player></Player>
          </div>
          <div className="col-4 mt-3">
            <KetQuaTroChoi></KetQuaTroChoi>
            <button
              className="btn btn-success p-2 mt-5 "
              onClick={this.props.playGame}
            >
              Play game
            </button>
          </div>
          <div className="col-4 mt-3">
            <Computer></Computer>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      // Khai báo hàm lặp đi lặp lại vô tận
      let ramdomComputerItem = setInterval(() => {
        dispatch({
          type: "RAM_DOM",
        });
        count++;
        if (count > 15) {
          // Dừng hàm Interval
          clearInterval(ramdomComputerItem);

          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(BaiTapGameOanTuXi);
