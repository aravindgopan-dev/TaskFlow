"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskControlller_1 = require("../controllers/taskControlller");
const router = (0, express_1.Router)();
router.get("/", taskControlller_1.getTasks);
exports.default = router;
