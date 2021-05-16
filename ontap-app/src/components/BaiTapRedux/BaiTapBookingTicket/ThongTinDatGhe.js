import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../../redux/actions/BaiTapDatVeActions";
class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button
            className="ghe"
            style={{ marginLeft: 0, marginTop: "25px" }}
          ></button>{" "}
          <span className="text-light" style={{ fontSize: "20px" }}>
            Ghế chưa đặt
          </span>
        </div>

        {/* Bảng table */}
        <div className="mt-4">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "20px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index} style={{ fontSize: "18px" }}>
                    <td className="text-success">{gheDangDat.soGhe}</td>
                    <td className="text-success">{gheDangDat.gia}</td>
                    <td>
                      <button
                        className="text-info bg-light"
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning" style={{ fontSize: "22px" }}>
                <td></td>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhSachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     datGhe: (ghe) => {
//       dispatch(datGheAction(ghe));
//     },
//   };
// };

export default connect(mapStateToProps, null)(ThongTinDatGhe);
