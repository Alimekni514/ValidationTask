import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  title: {
    type: String,
    enum: ["Horror", "Mystery"],
  },
});

export default mongoose.model("Category", CategorySchema);
