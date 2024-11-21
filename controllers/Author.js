import Author from "../models/Author.js";
export const createAuthor = async (req, res, next) => {
  try {
    const author = new Author(req.body);
    await author.save();

    res.status(200).json({ data: req.body, msg: "success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
