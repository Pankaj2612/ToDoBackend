import { Request, Response } from "express";
import Task from "../models/taskModel";

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};
export const getTaskByID = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findById(req.params.id);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
};
export const createTask = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: "Error creating task" });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.deleteOne({ id: id });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(201).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Task" });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTask = await Task.findOneAndUpdate({ id }, updateData, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(201).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Error Updating task" });
  }
};
