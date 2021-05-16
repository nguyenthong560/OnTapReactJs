import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top: -20px;}
      25% {top: 35px;}
      50% {top: 35px;}
      75% {top: -20px;}
      100% {top: 0px;}
    }`;

    return (
      <div className="text-center playGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            width={75}
            height={75}
            style={{
              position: "absolute",
              left: "30%",
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
            className="mt-3"
          ></img>
        </div>
        <div className="speech-bubble mt-2"></div>

        <img
          src="./gameOanTuXi/playerComputer.png"
          alt="./gameOanTuXi/playerComputer.png"
          style={({ width: 190 }, { height: 190 })}
        ></img>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
