import Task from "../models/Task.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ data: tasks, msg: "success" });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).json({ msg: "task not found" });
    } else {
      res.status(200).json({ data: task, msg: "success" });
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

export const createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(200).json({ data: req.body, msg: "success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!task) {
      return res.status(404).json({ msg: "task not found" });
    } else {
      return res.status(200).json({ data: task, msg: "success" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "task not found" });
    } else {
      return res.status(200).json({ data: task, msg: "success" });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};