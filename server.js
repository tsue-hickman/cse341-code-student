console.log('Starting server...');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 8080; 

// Middleware: Enable CORS and parse JSON
app.use(cors());
app.use(express.json());

// Serve frontend files 
app.use(express.static(__dirname));

// frontend connection
const professionalData = {
  professionalName: "Tayler Hickman",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==", // Replace with your base64 image
  nameLink: {
    firstName: "Tayler", 
    url: "https://example.com" 
  },
  primaryDescription: "I'm an up and coming developer in web technologies",
  workDescription1: "Software Engineer building scalable web apps",
  workDescription2: "Freelance developer creating interfaces that are user-friendly",
  linkTitleText: "Connect with Me",
  linkedInLink: {
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/tayler-sue-hickman-441817291/"
  },
  githubLink: {
    text: "GitHub", 
    link: "https://github.com/tsue-hickman"
  }
};

// REST endpoint: GET /professional
app.get('/professional', (req, res) => {
  res.json(professionalData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});