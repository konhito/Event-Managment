import mongoose from "mongoose";

const EventSchma = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please provide a title"],
      maxlength: [60, "Title cannot be more than 60 characters"],
    },
    category: {
      type: String,
      require: [true, "Please provide a description"],
      maxlength: [1000, "Description cannot be more than 1000 characters"],
    },
    img: {
      type: String || "",
    },
    EventDate: {
      type: Date,
    },
  },
  {
    timestamps: true, // for created nad updated at
  }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchma);
