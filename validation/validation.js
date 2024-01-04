function checkEmptyValue(value, errorId) {
  if (value.trim() === "") {
    document.getElementById(errorId).innerHTML = "Vui lòng không bỏ trống";
    return false;
  } else {
    document.getElementById(errorId).innerHTML = "";
    return true;
  }
}
function validateTaiKhoan(taiKhoan, errorId) {
  if (!taiKhoan || taiKhoan.length < 4 || taiKhoan.length > 6) {
    document.getElementById(errorId).innerHTML =
      "Tài khoản phải từ 4 đến 6 ký tự";
    return false;
  }
  document.getElementById(errorId).innerHTML = "";
  return true;
}


function validateTenNhanVien(ten, errorId) {
  var regex = /^[a-zA-Z\s]+$/;
  if (!ten || !regex.test(ten)) {
    document.getElementById(errorId).innerHTML =
      "Tên phải là chữ và không để trống";
    return false;
  }
  document.getElementById(errorId).innerHTML = "";
  return true;
}


function validateEmail(email, errorId) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email || !regex.test(email)) {
    document.getElementById(errorId).innerHTML = "Email không hợp lệ";
    return false;
  }
  document.getElementById(errorId).innerHTML = "";
  return true;
}


function validateMatKhau(matKhau, errorId) {
  var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  if (!matKhau || !regex.test(matKhau)) {
    document.getElementById(errorId).innerHTML =
      "Mật khẩu từ 6-10 ký tự và bao gồm ít nhất 1 số, 1 chữ in hoa";
    return false;
  }
  document.getElementById(errorId).innerHTML = "";
  return true;
}


function validateNgayLam(ngayLam, errorId) {
  var regex = /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/]\d{4}$/;
  if (!ngayLam || !regex.test(ngayLam)) {
    document.getElementById(errorId).innerHTML = "Định dạng ngày mm/dd/yyyy";
    return false;
  }
  document.getElementById(errorId).innerHTML = "";
  return true;
}


function validateLuongCoBan(luongCB, errorId) {
  var luong = Number(luongCB);
  if (isNaN(luong) || luong < 1000000 || luong > 20000000) {
    document.getElementById(errorId).innerHTML =
      "Lương từ 1.000.000 đến 20.000.000";
    return false;
  } else {
    document.getElementById(errorId).innerHTML = "";
    return true;
  }
}

function validateChucVu(chucVu, errorId) {
  if (chucVu == "Chọn chức vụ") {
    document.getElementById(errorId).innerHTML = "Chọn chức vụ hợp lệ";
    return false;
  }
  document.getElementById(errorId).innerHTML = "";
  return true;
}


function validateGioLam(gioLam, errorId) {
  var soGioLam = Number(gioLam);
  if (isNaN(soGioLam) || soGioLam < 80 || soGioLam > 200) {
    document.getElementById(errorId).innerHTML = "Giờ làm từ 80 đến 200 giờ";
    return false;
  } else {
    document.getElementById(errorId).innerHTML = "";
    return true;
  }
}
