const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.'))); 

// Fallback to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Data matching your frontend
const professionalData = {
  professionalName: "Tayler Hickman",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==", 
  nameLink: { firstName: "Tayler", url: "https://example.com" },
  primaryDescription: "I'm an up and coming developer in web technologies",
  workDescription1: "Software Engineer building scalable web apps",
  workDescription2: "Freelance developer creating interfaces that are user-friendly",
  linkTitleText: "Connect with Me",
  linkedInLink: { text: "LinkedIn", link: "https://www.linkedin.com/in/tayler-hickman-441817291/" },
  githubLink: { text: "GitHub", link: "https://github.com/tsue-hickman" }
};

// REST endpoint: GET /professional
app.get('/professional', (req, res) => {
  res.json(professionalData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});