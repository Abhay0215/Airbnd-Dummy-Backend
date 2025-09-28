const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reserveSchema = new Schema(
  {
    email: {
      type: String,
    },
    checkIn: {
      type: String,
    },
    placeId: { 
      type: String, 
      required: true
     },
    checkOut: {
      type: String,
    },
    guests: {
      type: String,
    },
  },
  { timestamps: true }
);

const Reserve = mongoose.model("Reserve", reserveSchema);
module.exports = Reserve;