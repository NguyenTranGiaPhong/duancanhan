document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Ngừng hành động mặc định của form (không tải lại trang)

    // Lấy các giá trị từ form
    const location = document.getElementById('location').value;
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const roomType = document.getElementById('roomType').value;

    // Kiểm tra thông tin đã đầy đủ chưa
    if (!location || !checkIn || !checkOut || !roomType) {
        alert("Vui lòng điền đầy đủ thông tin tìm kiếm.");
        return;
    }

    // Tạo URL tìm kiếm
    const searchUrl = `searchResults.html?location=${location}&checkIn=${checkIn}&checkOut=${checkOut}&roomType=${roomType}`;

    // Chuyển hướng người dùng đến trang kết quả tìm kiếm
    window.location.href = searchUrl;
});
