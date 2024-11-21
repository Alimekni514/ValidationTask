import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});
TaskSchema.pre("save", async function (next) {
  const Task = mongoose.model("Task");
  const booksByAuthor = await Task.find({ author: this.author });

  if (booksByAuthor.length === 0) {
    throw new Error("L auteur doit avoir ecrit au moins un autre livre avant.");
  }
  next();
});

export default mongoose.model("Task", TaskSchema);
