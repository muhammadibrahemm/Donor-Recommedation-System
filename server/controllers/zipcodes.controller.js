const locationModel = require('../models/location.model');

async function fetchAllCityNames(req, res) {
  try {
    const cities = await locationModel.find({}, { city: 1, _id: 0 }).lean();
    const cityNames = cities.map(c => c.city); // extract only city names
    res.status(200).json(cityNames);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities', error });
  }
}

module.exports = fetchAllCityNames;
