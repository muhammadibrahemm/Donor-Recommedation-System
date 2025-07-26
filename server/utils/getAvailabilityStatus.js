function getAvailabilityStatus(lastDonationDate) {
    if (!lastDonationDate) return true;
  
    const today = new Date();
    const diffInMs = today - new Date(lastDonationDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
    return diffInDays >= 90;
  }
  
  module.exports = getAvailabilityStatus;