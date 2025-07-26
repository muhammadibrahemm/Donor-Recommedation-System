const User = require("../models/user.model");
const DonorInfo = require("../models/donor.info.model");

const bloodCompatibility = {
  'A+': ['A+', 'A-', 'O+', 'O-'],
  'A-': ['A-', 'O-'],
  'B+': ['B+', 'B-', 'O+', 'O-'],
  'B-': ['B-', 'O-'],
  'AB+': ['A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-'],
  'AB-': ['A-', 'B-', 'AB-', 'O-'],
  'O+': ['O+', 'O-'],
  'O-': ['O-'],
};

async function findDonorByNearestZipCodeAndBloodGroup(req, res) {
  try {
    const { bloodGroup, city } = req.body;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    // Get the requesting user's ZIP code using city
    const userData = await User.findOne({ city });
    if (!userData) {
      return res.status(404).json({ message: 'City ZIP code not found' });
    }

    const patientZip = parseInt(userData.zipcode);
    const compatibleGroups = bloodCompatibility[bloodGroup];

    if (!compatibleGroups) {
      return res.status(400).json({ message: 'Invalid blood group' });
    }

    // 🔢 Total donors from User model (role === 'donor')
    const totalDonors = await User.countDocuments({ role: 'donor' });

    // 🎯 Compatible donors from User
    const allCompatibleUsers = await User.find({
      bloodGroup: { $in: compatibleGroups },
      role: 'donor',
    });

    const donorUserIds = allCompatibleUsers.map(user => user._id);
    const totalCompatibleDonors = donorUserIds.length;

    // ✅ Available donors from DonorInfo
    const donorInfoList = await DonorInfo.find({
      donorRefID: { $in: donorUserIds },
      available: true,
    }).populate('donorRefID');

    const eligibleDonors = donorInfoList.map(info => {
      const donor = info.donorRefID;
      return {
        name: donor.name,
        email: donor.email,
        phone: donor.phone,
        city: donor.city,
        bloodGroup: donor.bloodGroup,
        zipcode: donor.zipcode,
        availability: true,
        lastDonationDate: info.lastDonationDate,
        donationCount: info.donationCount,
        zipDifference: Math.abs(parseInt(donor.zipcode) - patientZip),
      };
    });

    // Sort by proximity (ZIP code difference)
    eligibleDonors.sort((a, b) => a.zipDifference - b.zipDifference);

    // Pagination
    const totalEligibleDonors = eligibleDonors.length;
    const totalPages = Math.ceil(totalEligibleDonors / limit);
    const paginatedDonors = eligibleDonors.slice(skip, skip + limit);

    return res.status(200).json({
      currentPage: page,
      totalPages,
      totalDonors,
      totalCompatibleDonors,
      totalEligibleDonors,
      donors: paginatedDonors,
    });

  } catch (error) {
    console.error('Error finding donors:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}

module.exports = findDonorByNearestZipCodeAndBloodGroup;
