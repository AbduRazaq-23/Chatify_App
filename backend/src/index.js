import "./config/env.js";
import app from "./app.js";
import connectDB from "./DB/db.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`app is running on ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
