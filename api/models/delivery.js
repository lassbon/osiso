const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    userid: String,
    deliveryFrom: String,
    deliveryTo: String,
    riderid: String

});

module.exports = mongoose.model('Delivery', deliverySchema);