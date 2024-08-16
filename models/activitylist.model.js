const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const activitySchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
});

// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model("300382464-daniel", activitySchema);
module.exports = Activitymodel;