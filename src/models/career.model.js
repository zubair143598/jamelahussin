import mongoose from "mongoose";

const CareerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      maxlength: 255,
    },

    phone: {
      type: String,
      required: true,
      maxlength: 30,
    },

    position: {
      type: String,
      required: true,
      maxlength: 100,
    },

    experience: {
      type: String,
      maxlength: 50,
    },

    message: {
      type: String,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Career ||
  mongoose.model("Career", CareerSchema);