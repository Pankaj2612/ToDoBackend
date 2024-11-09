import { error } from "console";
import mongoos from "mongoose";

mongoos
  .connect(
    "mongodb+srv://sahu94002:8qFZmKc4USTvZI8y@cluster0.5sxiy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log(error);
  });
