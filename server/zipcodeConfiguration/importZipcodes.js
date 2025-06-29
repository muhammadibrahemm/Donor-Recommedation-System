const mongoose = require('mongoose');
const csv = require('csvtojson');
const path = require('path');
const locationModel = require("../models/location.model");

// Function to Import CSV
async function importData() {
    try {
      const filePath = path.join(__dirname, 'zipcodes.csv');
      const jsonArray = await csv().fromFile(filePath);
  
      // Dynamic mapping (no hardcoded header names)
      const cleanedData = jsonArray.map(row => {
        const city = row['Area_Name']?.trim() || row['Area Name']?.trim() || row['area_name']?.trim() || '';
        const zip = row['Postal_code']?.toString().trim() || row['Postal Code']?.toString().trim() || row['postal_code']?.trim() || '';
  
        return { city, zip };
      });
  
      await locationModel.insertMany(cleanedData);
      console.log(`Inserted ${cleanedData.length} records into MongoDB Locations and Zipcodes`);
    } catch (err) {
      console.error('Error importing CSV:', err);
    }
  }

  module.exports = importData;
  
