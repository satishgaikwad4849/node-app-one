const express = require("express");
const connectDB = require('./db/conn');
const router = require('./routers/menRouter');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

// Connect to the database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });


