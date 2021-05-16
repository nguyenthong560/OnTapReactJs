import { combineReducers } from "redux";
import { GioHangReducer } from "../reducers/GioHangReducer";
import { BurgerReducer } from "../reducers/BurgerReducer";
import { QuanLySinhVienReducer } from "../reducers/QuanLySinhVienReducer";
import BaiTapXucSacReducer from "../reducers/BaiTapXucSacReducer";
import BaiTapOanTuXiReducer from "../reducers/BaiTapOanTuXiReducer";
import BaiTapDatVeReducer from "../reducers/BaiTapDatVeReducer";
//store tong ung dung
export const rootReducer = combineReducers({
  //Noi chua cac reducer cho nghiep vu(store con)
  GioHangReducer: GioHangReducer,
  BurgerReducer: BurgerReducer,
  QuanLySinhVienReducer,
  BaiTapXucSacReducer,
  BaiTapOanTuXiReducer,
  BaiTapDatVeReducer,
});
