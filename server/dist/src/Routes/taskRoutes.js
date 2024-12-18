"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskControlller_1 = require("../controllers/taskControlller");
const router = (0, express_1.Router)();
router.get("/", taskControlller_1.getTasks);
router.post("/", taskControlller_1.createTask);
router.patch("/:taskId/status", taskControlller_1.updateTaskStatus);
exports.default = router;
