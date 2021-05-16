import XucSac from "../../components/BaiTapRedux/BaiTapGameXucSac/XucSac";

const stateDefault = {
  taiXiu: true, // True: là tài (từ 3->11), false là xỉu (>12)
  mangXucSac: [
    { ma: 1, hinhAnh: "./gameXucSac/1.png" },
    { ma: 1, hinhAnh: "./gameXucSac/1.png" },
    { ma: 1, hinhAnh: "./gameXucSac/1.png" },
  ],
  soBanThang: 0,
  soBanChoi: 0,
};

const BaiTapXucSacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.taiXiu = action.taiXiu; // nhận action tài xĩu từ bên kia truyền vào false
      return { ...state };
    }
    case "PLAY_GAME": {
      // Bước 1: xử lý radom xúc sắc
      let mangXucSacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Mỗi lần lập radom ra 1 con số ngẫu nhiên từ 1->6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // Tạo ra 1 đối tượng xúc sắc từ số ngẫu nhiên
        let xucSacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./gameXucSac/${soNgauNhien}.png`,
        };
        // Push vào mảng xúc sắc ngẫu nhiên
        mangXucSacNgauNhien.push(xucSacNgauNhien);
      }

      // Gán state mảng xúc sắc bằng mảng xúc sắc ngẫu nhiên
      state.mangXucSac = mangXucSacNgauNhien;

      // Xử lý tăng bàn chơi
      state.soBanChoi += 1;

      // Xử lý tổng điểm

      let tongSoDiem = mangXucSacNgauNhien.reduce((tongDiem, XucSac, index) => {
        return (tongDiem += XucSac.ma);
      }, 0);

      //nếu như tổng điềm mà lớn hơn 11 và người dùng chọn true = Tài
      if (
        (tongSoDiem > 11 && state.taiXiu === true) ||
        (tongSoDiem <= 11 && state.taiXiu === false)
      ) {
        state.soBanThang += 1;
      }

      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BaiTapXucSacReducer;
