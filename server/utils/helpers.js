const Order = require('../models/Order'); // Import your Order model

async function generateUniqueOrderNumber() {
  const prefix = 'ORD'; // You can customize the prefix
  let isUnique = false;
  let orderNumber;

  // Keep generating order numbers until a unique one is found
  while (!isUnique) {
    const random = Math.floor(10000 + Math.random() * 90000);
    orderNumber = `${prefix}${random}`;

    // Check if the generated order number already exists in the database
    const existingOrder = await Order.findOne({ orderNumber });

    if (!existingOrder) {
      // If it doesn't exist, mark it as unique
      isUnique = true;
    }
  }
  // console.log({orderNumber});
  return orderNumber;
}


module.exports = {generateUniqueOrderNumber};
