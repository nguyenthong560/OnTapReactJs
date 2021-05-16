import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
    },
    valid: false,
  };

  hanleChange = (e) => {
    //Lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let tagInput = e.target;
    let { name, value, type } = tagInput;

    let errorMessage = "";

    // Kiểm tra rỗng
    if (value.trim() === "") {
      //Kiểm tra bất kì control input nào người dùng nhập vào điều kiểm tra trống
      errorMessage = name + " không được bỏ trống !";
    }

    // Kiểm tra email
    if (type === "email") {
      const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!regex.test(value)) {
        errorMessage = name + " không đúng định dạng";
      }
    }

    let values = { ...this.state.values, [name]: value }; // Cập nhật giá trị values cho state
    let errors = { ...this.state.errors, [name]: errorMessage }; // Cập nhật lỗi state
    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        this.checkValid();
      }
    );
  };

  hanleSubmit = (e) => {
    e.preventDefault(); //Cản sự kiện submit reload trang của browser
    this.props.themSinhVien(this.state.values);
  };
  // duyệt các thuộc tính của mảng thì dùng for in
  // duyệt các phần tử của mảng thì dùng for of
  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }

    this.setState({
      ...this.state,
      valid: valid,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form action="" onSubmit={this.hanleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Mã SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.hanleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Họ Tên</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.hanleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>

              <div className="row">
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.hanleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
                <div className="form-group col-6">
                  <span>Điện Thoại</span>
                  <input
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.hanleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-right">
                  {this.state.valid ? (
                    <button type="submit" className="btn btn-success">
                      Thêm sinh viên
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-success" disabled>
                      Thêm sinh viên
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
