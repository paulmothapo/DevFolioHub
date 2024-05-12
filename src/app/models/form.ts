const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DATA_BASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Define the Portfolio schema
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

// Create the Portfolio model
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Middleware for parsing JSON request bodies
app.use(express.json());

// Create a new portfolio
app.post('/api/portfolios', async (req, res) => {
  const { title, developer, description, tags, websiteUrl, thumbnail } = req.body;

  try {
    const portfolio = new Portfolio({
      title,
      developer,
      description,
      tags,
      websiteUrl,
      thumbnail,
    });

    const newPortfolio = await portfolio.save();
    res.status(201).json(newPortfolio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});