require("dotenv").config(); // process.env.ENV_VARIABLE
const express = require("express");
const mongoose = require("mongoose");
const scheduleRouter = require("./routes/schedule-routes");
const lecturerRouter = require("./routes/lecturer-routes");
const moduleRouter = require("./routes/module-routes");
const venueRouter = require("./routes/venue-routes");

// Middleware
const app = express();
app.use(express.json());

// ROUTES
app.use("/schedules", scheduleRouter);
app.use("/Lecturers", lecturerRouter);
app.use("/Modules", moduleRouter);
app.use("/Venue", venueRouter);

// Connections
mongoose
  .connect(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.fxfth.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening to port ${port}`));
