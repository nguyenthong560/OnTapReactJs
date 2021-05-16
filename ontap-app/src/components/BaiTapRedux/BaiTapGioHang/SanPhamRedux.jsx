import React, { Component } from "react";
//kết nối với GioHangReducer
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;

    return (
      <div className="card text-white bg-primary">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          width={150}
          height={250}
          alt
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
        </div>
        <button
          onClick={() => {
            this.props.themGioHang(sanPham);
          }}
        >
          Thêm giỏ hàng
        </button>
      </div>
    );
  }
}

// Xây dựng hàm tạo ra prop là hàm xử lý sự kiện => đưa dữ liệu lên store
// nơi nào chứa cái nút phương thức xử lý thì có mapDispatchToProps
// đưa dispatch lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    //tạo ra props component (là function => đưa dữ liệu lên store);
    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };

      //tạo action đưa dữ liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG", // bắt buộc đặt tên type
        spGioHang: spGioHang, //Nội dung gửi lên reducer
      };
      console.log(action);
      //Dùng hàm dispatch để đưa dữ liệu action lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPhamRedux);
//tham số thứ nhất lấy giá trị từ redux về
//tham số thứ hai nó sẽ định nghĩa cái hàm để đưa giá trị lên redux là mapDispatchToProps
