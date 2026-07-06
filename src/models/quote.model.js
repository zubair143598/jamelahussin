import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema(
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

    company: {
      type: String,
      maxlength: 150,
    },

    service_type: {
      type: String,
      required: true,
      maxlength: 100,
    },

    message: {
      type: String,
      required: true,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Quote ||
  mongoose.model("Quote", QuoteSchema);