var arrNhanVien = [];

function getValueUser() {
  var arrInput = document.querySelectorAll("form input, form select");
  var arrError = document.querySelectorAll("form span.sp-thongbao");
  var nhanVien = new NhanVien();
  var isValid = true;
  var tempNhanVien = {};

  for (var i = 0; i < arrInput.length; i++) {
    var input = arrInput[i];
    var errorElementId = arrError[i].id;
    var value = input.value;
    var id = input.id;

    if (!checkEmptyValue(value, errorElementId)) {
      isValid = false;
    } else {
      switch (id) {
        case "tknv":
          isValid &= validateTaiKhoan(value, errorElementId);
          break;
        case "name":
          isValid &= validateTenNhanVien(value, errorElementId);
          break;
        case "email":
          isValid &= validateEmail(value, errorElementId);
          break;
        case "password":
          isValid &= validateMatKhau(value, errorElementId);
          break;
        case "datepicker":
          isValid &= validateNgayLam(value, errorElementId);
          break;
        case "luongCB":
          isValid &= validateLuongCoBan(value, errorElementId);
          break;
        case "chucVu":
          isValid &= validateChucVu(value, errorElementId);
          break;
        case "gioLam":
          isValid &= validateGioLam(value, errorElementId);
          break;
      }
    }

    if (isValid) {
      tempNhanVien[id] = value;
    }
  }

  if (isValid) {
    Object.assign(nhanVien, tempNhanVien);
    return nhanVien;
  }
}

document.getElementById("formQLNV").onsubmit = function (event) {
  event.preventDefault();
  var nhanVien = getValueUser();
  if (nhanVien) {
    arrNhanVien.push(nhanVien);
    // console.log(arrNhanVien);
    document.getElementById("formQLNV").reset();
    luuDuLieuLocalStorage("arrNhanVien", arrNhanVien);
    hienThiDuLieu();
  }
};

function timKiemNhanVienTheoLoai(loai) {
  return arrNhanVien.filter(
    (nhanVien) => nhanVien.xepLoai().toLowerCase() === loai.toLowerCase()
  );
}
document.getElementById("btnTimNV").onclick = function () {
  var loaiNhanVien = document.getElementById("searchName").value;
  var ketQuaTimKiem = timKiemNhanVienTheoLoai(loaiNhanVien);
  hienThiDuLieu(ketQuaTimKiem);
};

function hienThiDuLieu(arr) {
  if (arr == undefined) {
    arr = arrNhanVien;
  }
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nhanVien = arr[i];
    var newNhanVien = new NhanVien();
    nhanVien = Object.assign(newNhanVien, nhanVien);
    content += `
    <tr>
    <td>${nhanVien.tknv}</td>
    <td>${nhanVien.name}</td>
    <td>${nhanVien.email}</td>
    <td>${nhanVien.datepicker}</td>
    <td>${nhanVien.chucVu}</td>
    <td>${nhanVien.tinhTongLuong()}</td>
    <td>${nhanVien.xepLoai()}</td>
    <td>
    <button onclick="xoaDuLieuUser('${
      nhanVien.email
    }')" class="btn btn-danger">Xóa</button>
    <button onclick="getInfoUser('${
      nhanVien.email
    }')" class="btn btn-warning mt-3">Sửa</button>
    </td>
    </tr>
    `;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
}

function luuDuLieuLocalStorage(key, value) {
  var stringValue = JSON.stringify(value);
  localStorage.setItem(key, stringValue);
  hienThiDuLieu();
}

function layDuLieuLocalStorage(key) {
  var dataLocal = localStorage.getItem(key);
  if (dataLocal) {
    var arrData = JSON.parse(dataLocal);
    arrNhanVien = arrData.map(function (data) {
      var nhanVien = new NhanVien();
      Object.assign(nhanVien, data);
      return nhanVien;
    });
    hienThiDuLieu();
  }
}

layDuLieuLocalStorage("arrNhanVien");

function xoaDuLieuUser(email) {
  var index = -1;
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (arrNhanVien[i].email == email) {
      index = i;
    }
  }
  if (index != -1) {
    arrNhanVien.splice(index, 1);
    luuDuLieuLocalStorage("arrNhanVien", arrNhanVien);
    hienThiDuLieu();
  }
}

// $('#myModal').on('hidden.bs.modal', function (e) {
//   // do something...
// })

// $('#myModal').modal('show')
function getInfoUser(email) {
  var nhanVien = arrNhanVien.find((nv) => nv.email === email);
  if (!nhanVien) return;
  var arrInput = document.querySelectorAll(
    "#myModal form input, #myModal form select"
  );
  for (var i = 0; i < arrInput.length; i++) {
    var id = arrInput[i].id;
    arrInput[i].value = nhanVien[id] || "";
  }
  document.getElementById("email").readOnly = true;
  $("#myModal").modal("show");
}

function updateValueUser() {
  var nhanVien = getValueUser();
  for (var i = 0; i < arrNhanVien.length; i++) {
    if (nhanVien.email == arrNhanVien[i].email) {
      arrNhanVien[i] = nhanVien;
    }
  }
  luuDuLieuLocalStorage("arrNhanVien", arrNhanVien);
  hienThiDuLieu();
  document.getElementById("formQLNV").reset();
  document.getElementById("email").readOnly = false;
}

document.getElementById("btnCapNhat").onclick = updateValueUser;

