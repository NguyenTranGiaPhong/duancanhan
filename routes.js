const express = require('express');
const Hotel = require('./models');
const router = express.Router();

router.get('/search', async (req, res) => {
    const { location, checkIn, checkOut, roomType } = req.query;

    try {
        const hotels = await Hotel.find({
            location: location,
            roomType: roomType,
        }).limit(10);  // Giới hạn kết quả tối đa 10 khách sạn

        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hotels' });
    }
});

module.exports = router;
