const stateDefault = {
  mangDatCuoc: [
    { ma: "bao", hinhAnh: "./gameOanTuXi/bao.png", datCuoc: true },
    { ma: "keo", hinhAnh: "./gameOanTuXi/keo.png", datCuoc: false },
    { ma: "bua", hinhAnh: "./gameOanTuXi/bua.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, you will die",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bua", hinhAnh: "./gameOanTuXi/bua.png" },
};

const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      //Reset mảng đặt cược
      let mangCuocUpdate = [...state.mangDatCuoc];
      // Tạo ra mảng cược mới từ mảng cược cũ và action. maCuoc do người dùng truyền lên
      mangCuocUpdate = mangCuocUpdate.map((item, index) => {
        //Mỗi lần nó trả về 1 object cũ thì nó gáng lại thuộc tính datCuoc = false
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      // Tìm ra maCuoc để change trạng thái đặt cược ứng với mã cược đó

      state.mangDatCuoc = mangCuocUpdate;
      return { ...state };
    }

    case "RAM_DOM": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangDatCuoc[soNgauNhien];

      state.computer = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME":
      {
        let player = state.mangDatCuoc.find((item) => item.datCuoc === true);
        let computer = state.computer;

        switch (player.ma) {
          case "keo": {
            if (computer.ma === "keo") {
              state.ketQua = "Ngang tài ngang sức !!!";
            } else if (computer.ma === "bua") {
              state.ketQua = "thua ùi !!!";
            } else {
              state.soBanThang += 1; //thắng +1
              state.ketQua = "I'm iron man, you will die !!";
            }
            break;
          }

          case "bua": {
            if (computer.ma === "keo") {
              state.soBanThang += 1; //thắng +1
              state.ketQua = "I'm iron man, you will die !!";
            } else if (computer.ma === "bua") {
              state.ketQua = "Ngang tài ngang sức !!!";
            } else {
              state.ketQua = "thua ùi !!!";
            }
            break;
          }

          case "bao": {
            if (computer.ma === "keo") {
              state.ketQua = "thua ùi !!!";
            } else if (computer.ma === "bua") {
              state.soBanThang += 1; //thắng +1
              state.ketQua = "I'm iron man, you will die !!";
            } else {
              state.ketQua = "Ngang tài ngang sức !!!";
            }
            break;
          }

          default:
            state.ketQua = "I'm iron man, you will die !!";
        }
      }
      state.soBanChoi += 1;

      return { ...state };
    default:
      return { ...state };
  }
};
export default BaiTapOanTuXiReducer;
