// models/Portfolio.js

import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  description: { type: String },
  tags: [{ type: String }],
  websiteUrl: { type: String, required: true },
  thumbnail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

let Portfolio;

try {
  Portfolio = mongoose.model('Portfolio');
} catch {
  Portfolio = mongoose.model('Portfolio', portfolioSchema);
}

export default Portfolio;
