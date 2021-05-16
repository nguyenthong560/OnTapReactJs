import "./App.css";
import BTGioHangRedux from "./components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux";
import BaiTapBurger from "./components/BaiTapRedux/BaiTapBurger/BaiTapBurger";
import BaiTapForm from "./components/BaiTapRedux/BaiTapForm/BaiTapForm";
import BaiTapGameXucSac from "./components/BaiTapRedux/BaiTapGameXucSac/BaiTapGameXucSac";
import BaiTapGameOanTuXi from "./components/BaiTapRedux/BaiTapGameOanTuXi/BaiTapGameOanTuXi";
import BaiTapBookingTicket from "./components/BaiTapRedux/BaiTapBookingTicket/BaiTapBookingTicket";

function App() {
  return (
    <div className="App">
      {/* <BTGioHangRedux></BTGioHangRedux> */}
      {/* <BaiTapBurger></BaiTapBurger> */}
      {/* <BaiTapForm></BaiTapForm> */}
      {/* <BaiTapGameXucSac></BaiTapGameXucSac> */}
      {/* <BaiTapGameOanTuXi></BaiTapGameOanTuXi> */}
      <BaiTapBookingTicket></BaiTapBookingTicket>
    </div>
  );
}

export default App;
