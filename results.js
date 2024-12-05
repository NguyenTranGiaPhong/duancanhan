const rooms = [
    {
        id: 1,
        name: 'Phòng Đơn',
        price: '500,000 VND',
        description: 'Phòng cho 1 người, đầy đủ tiện nghi.',
        image: 'images/gia đình 2.jpg'
    },
    {
        id: 2,
        name: 'Phòng Đôi',
        price: '800,000 VND',
        description: 'Phòng cho 2 người, giường đôi, tiện nghi đầy đủ.',
        image: 'images/Phòng đôi 1.jpg'
    },
    {
        id: 3,
        name: 'Phòng Đơn',
        price: '500,000 VND',
        description: 'Phòng cho 1 người, đầy đủ tiện nghi.',
        image: 'images/phòng đơn 2.jpg'
    },
    {
        id: 4,
        name: 'Phòng Gia Đình',
        price: '1,200,000 VND',
        description: 'Phòng cho gia đình 4 người, không gian rộng rãi.',
        image: 'images/gia đình 1.jpg'
    },
    {
        id: 5,
        name: 'Phòng Đôi',
        price: '800,000 VND',
        description: 'Phòng cho 2 người, giường đôi, tiện nghi đầy đủ.',
        image: 'images/Phòng đôi 2.jpg'
    },
    {
        id: 6,
        name: 'Phòng Gia Đình',
        price: '1,200,000 VND',
        description: 'Phòng cho gia đình 4 người, không gian rộng rãi, thoáng mát.',
        image: 'images/gia đình 2.jpg'
    },
];

const roomResultsDiv = document.getElementById('roomResults');
rooms.forEach(room => {
    const roomElement = document.createElement('div');
    roomElement.classList.add('room');

    roomElement.innerHTML = `
        <h3>${room.name}</h3>
        <img src="${room.image}" alt="${room.name}" style="width: 100%; height: auto;" />
        <p><strong>Giá:</strong> ${room.price}</p>
        <p><strong>Mô tả:</strong> ${room.description}</p>
        <button onclick="bookRoom(${room.id})">Đặt Phòng</button>
    `;

    roomResultsDiv.appendChild(roomElement);
});
