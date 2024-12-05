// Lưu thông tin cá nhân
document.getElementById('personalInfoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng việc tải lại trang khi form được gửi
    let name = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;

    document.getElementById('savedInfo').textContent = "Tên: " + (name ? name : "Chưa nhập tên");
    document.getElementById('savedEmail').textContent = "Email: " + (email ? email : "Chưa nhập email");
});

// Đăng xuất
document.getElementById('logout').addEventListener('click', function () {
    document.getElementById('savedInfo').textContent = "Tên: Chưa nhập tên";
    document.getElementById('savedEmail').textContent = "Email: Chưa nhập email";
});

// Gửi câu hỏi
document.getElementById('submitQuestion').addEventListener('click', function () {
    let question = document.getElementById('customerQuestion').value;
    if (question) {
        alert("Câu hỏi của bạn đã được gửi!");
        document.getElementById('customerQuestion').value = ""; // Xóa câu hỏi sau khi gửi
    } else {
        alert("Vui lòng nhập câu hỏi.");
    }
});
