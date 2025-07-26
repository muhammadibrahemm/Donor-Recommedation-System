const User = require('../models/user.model');
const DonorInfo = require('../models/donor.info.model');

async function getAllDonorsWithAvailability(req,res){
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 9;

        const skip = (page - 1) * limit;

        const totalDonors = await User.countDocuments({ role: 'donor' });

        const donorUsers = await User.find({ role: 'donor' })
        .skip(skip)
        .limit(limit)
        .lean();

        const availabilityCounts = await DonorInfo.aggregate([
            {
              $group: {
                _id: '$available',
                count: { $sum: 1 }
              }
            }
        ]);


        console.log("availabilty Counts:",availabilityCounts);

        const availability = availabilityCounts[0].count;
        const nonAvailability = availabilityCounts[1].count;

        console.log("availability",availability);
        console.log("nonAvailability",nonAvailability);


        

        const donorIds = donorUsers.map(donor => donor._id);

        const donorInfos = await DonorInfo.find({ donorRefID: { $in: donorIds } }).lean();

        const donorInfoMap = {};
        donorInfos.forEach(info => {
            donorInfoMap[info.donorRefID.toString()] = info;
        });

        const combinedDonors = donorUsers.map(donor => {
            const info = donorInfoMap[donor._id.toString()] || {};
      
            return {
              _id: donor._id,
              name: donor.name,
              email: donor.email,
              phone: donor.phone,
              city: donor.city,
              bloodGroup: donor.bloodGroup,
              zipcode: donor.zipcode,
              gender: donor.gender,
              age: donor.age,
              available: info.available ?? false,
              lastDonationDate: info.lastDonationDate ?? null,
              donationCount: info.donationCount ?? [],
            };
          });

            return res.status(200).json({
            currentPage: page,
            totalPages: Math.ceil(totalDonors / limit),
            totalDonors,
            donors: combinedDonors,
            availability,
            nonAvailability
          });
        
    } catch (error) {
        console.error("Error fetching donors with availability:", error);
        res.status(500).json({ message: "Server error" });
    }
}


module.exports = getAllDonorsWithAvailability;