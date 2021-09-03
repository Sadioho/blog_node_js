const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true }, // unique tạo duy nhất 1 cái k trùng
    videoId: { type: String, required: true },
    level: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', Course);
