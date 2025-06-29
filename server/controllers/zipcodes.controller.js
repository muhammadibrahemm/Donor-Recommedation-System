const locationModel = require('../models/location.model');

async function fetchAllCityNames(req, res) {
  try {
    const cities = await locationModel.find({}, 'city').lean(); // only get `city`
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cities', error });
  }
}

module.exports = fetchAllCityNames;
