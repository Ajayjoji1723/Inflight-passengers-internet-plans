const mongoose = require('mongoose');

const activationSchema = new mongoose.Schema({
    planId: mongoose.Schema.Types.ObjectId,
    startTime: Date,
    endTime: Date,
    description:String
  });



module.exports = mongoose.model('Activation', activationSchema);
