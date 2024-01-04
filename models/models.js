function NhanVien() {
  this.tknv = "";
  this.name = "";
  this.email = "";
  this.password = "";
  this.datepicker = "";
  this.luongCB = 0;
  this.chucVu = "";
  this.gioLam = 0;
  // this.loaiNhanVien = "";
  // this.tongLuong = 0;

  this.xepLoai = function () {
    var loaiNhanVien = "";
    if (this.gioLam >= 192) {
      loaiNhanVien = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 172 & this.gioLam < 192) {
      loaiNhanVien = "Nhân viên giỏi";
    } else if (this.gioLam >= 160 & this.gioLam < 172) {
      loaiNhanVien = "Nhân viên khá";
    } else {
      loaiNhanVien = "Nhân Viên trung bình";
    }
    return loaiNhanVien;
  };

  this.tinhTongLuong = function () {
    var tongLuong = 0;
    if (this.chucVu == "Sếp") {
      tongLuong = this.luongCB * 3;
    } else if ((this.chucVu == "Trưởng phòng")) {
      tongLuong = this.luongCB * 2;
    } else {
      tongLuong = this.luongCB;
    }
    return tongLuong;
  };
}
