import Category from "../models/Category.js";
export const createCategory = async (req, res, next) => {
  try {
    const category = new Category(req.body);
    await category.save();

    res.status(200).json({ data: req.body, msg: "success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
