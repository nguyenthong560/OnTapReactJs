import React, { Component } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../../data/danhSachGhe.json";
import HangGhe from "./HangGhe";
class BaiTapBookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div
                  className="text-warning text-center"
                  style={{ fontSize: "40px" }}
                >
                  BÀI TẬP ĐẶT VÉ XEM PHIM
                </div>
                <div className="mt-2 text-light" style={{ fontSize: "18px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <div className="text-light mt-5" style={{ fontSize: "30px" }}>
                  DANH SÁCH GHẾ BẠN CHỌN
                  <ThongTinDatGhe></ThongTinDatGhe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaiTapBookingTicket;
