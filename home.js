const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data representing apartments
const apartments = [
  {
    id: 1,
    name: 'Apartment 1',
    location: 'New York',
    beds: 2,
    space: '1000 sqft',
    price: 1500,
    phoneNumber: '123-456-7890'
  },
  {
    id: 2,
    name: 'Apartment 2',
    location: 'Los Angeles',
    beds: 3,
    space: '1200 sqft',
    price: 2000,
    phoneNumber: '987-654-3210'
  },
  // Add more apartments as needed
];

// Route to get all apartments
app.get('/apartments', (req, res) => {
  res.json(apartments);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
