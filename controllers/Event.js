import Task from "../models/Event.js";

export const createTask = async (req, res, next) => {
    try {
      const task = new Event(req.body);
      await task.save();
  
      res.status(200).json({ data: req.body, msg: "success" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  };