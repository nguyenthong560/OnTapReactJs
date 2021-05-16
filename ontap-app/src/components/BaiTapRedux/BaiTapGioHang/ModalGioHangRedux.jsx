import React, { Component } from "react";

//Kết nối redux (connect ham ket noi reactComponent)
import { connect } from "react-redux";
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    //this.props.gioHang là thuộc tính nhận từ redux
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width={50} height={75}></img>
          </td>
          <td>{spGH.giaBan}</td>
          <td>
            <button onClick={() => this.props.tangGiamSoLuong(index, true)}>
              +
            </button>
            {spGH.soLuong}
            <button onClick={() => this.props.tangGiamSoLuong(index, false)}>
              -
            </button>
          </td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              className="btn-danger"
              onClick={() => this.props.xoaGioHangIndex(index)}
            >
              Xoá
            </button>
            {/* Cách 2: xoá theo mã sản phẩm */}
            <button
              className="btn-danger"
              onClick={() => this.props.xoaGioHangMaSP(spGH.maSP)}
            >
              Xoá theo maSP
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props.gioHang);
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã Sp</th>
              <th>Tên sp</th>
              <th>Hình ảnh</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
          <tfoot>
            <td colSpan="5"></td>
            <td>Tổng tiền</td>
            <td>
              {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                return (tongTien += spGioHang.soLuong * spGioHang.giaBan);
              }, 0)}
            </td>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //mapStateToProp là nó sẽ lấy dữ liệu từ store(gioHang) đưa về chuyển thành props component và nó render ra giao diện
  //State là store tổng, => truy xuất đến gioHangReducer => biến state trên GioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang,
    // return trả về 1 opject, opject đó trở thành props của component này ModalGioHangRedux
    // đặt tên prop là gioHang ... state chấm tới store tổng là GioHangReducer(bên trong rootReducer)
    // Và chấm tới tên state giá trị gioHang thay đổi trong (GioHangReducer)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index: index,
      };
      //Đưa action lên reducer
      dispatch(action);
    },
    xoaGioHangMaSP: (maSP) => {
      const action = {
        type: "XOA_GIO_HANG_MASP",
        maSP: maSP,
      };
      //Đưa action lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index: index,
        tangGiam: tangGiam,
      };
      //Đưa action lên reducer
      dispatch(action);
    },
  };
};

//Hàm connect này sẽ nhận về 2 tham số
// Tham số thứ nhất sẽ là hàm mapStateToProps, tham số thứ 2 null
// Sau khi phương thức connect được gọi nó sẽ trả về 1 component mới là ModalGoHangRedux
// Tuy nhiên nó sẽ chứa thêm 1 thuộc tính nữa là gioHang
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
// Sau khi gọi hàm mapDispatchToProps thì truyền vào tham số là null ở lúc đầu
