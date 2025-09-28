require('dotenv').config();
const cors = require('cors');
const express = require('express');
const user = require("./routes/useroutes");

const connectDB = require('./database');
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", user);


app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
