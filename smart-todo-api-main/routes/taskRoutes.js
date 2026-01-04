const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/taskController");

router.post("/tasks", auth, controller.createTask);
router.get("/tasks", auth, controller.getTasks);
router.put("/tasks/:id", auth, controller.updateTask);
router.delete("/tasks/:id", auth, controller.deleteTask);

module.exports = router;
