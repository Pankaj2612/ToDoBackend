import { Router } from "express";
import {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskcontroller";

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskByID);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
