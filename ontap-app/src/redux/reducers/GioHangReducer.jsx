//khởi tạo giá trị ban đầu của store
const stateGioHang = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "./img/sp_iphoneX.png",
      soLuong: 1,
      giaBan: 1000,
      thanhTien: 1000,
    },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        // Xử lý logic thêm giỏ hàng
        // Do tính bất biển của redux nên tạo ra 1 gioHang sao chép
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          gioHangCapNhat.push(action.spGioHang);
        }
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;

    case "XOA_GIO_HANG":
      {
        let gioHangCapNhat = [...state.gioHang];
        // Xoá giỏ hàng dựa vào index
        gioHangCapNhat.splice(action.index, 1);
        // Gán giỏ hàng mới cho state.gioHang => render lại giao diện
        // làm bước này để render ra giao diện
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;

    case "XOA_GIO_HANG_MASP":
      {
        let gioHangCapNhat = [...state.gioHang];
        //Tìm index của sản phẩm dựa vào mã sản phẩm
        let index = gioHangCapNhat.findIndex(
          (spGH) => spGH.maSP === action.maSP
        );
        if (index !== -1) {
          // Xoá giỏ hàng
          gioHangCapNhat.splice(action.index, 1);
        }

        // Gán giỏ hàng mới cho state.gioHang => render lại giao diện
        // làm bước này để render ra giao diện
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;

    case "TANG_GIAM_SL":
      {
        // kỹ thuật bốc tách phần tử
        const { index, tangGiam } = action;
        // Xử lý tăng giảm số lượng
        let gioHangCapNhat = [...state.gioHang];
        if (tangGiam) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          if (gioHangCapNhat[index].soLuong > 1) {
            gioHangCapNhat[index].soLuong -= 1;
          }
        }
        //cập nhật lại state của GioHangReducer
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    default:
      {
        return { ...state };
      }
      break;
  }
};
