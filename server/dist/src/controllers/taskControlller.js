"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskStatus = exports.createTask = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { projectId } = req.query;
        const tasks = yield prisma.task.findMany({
            where: {
                projectId: Number(projectId)
            },
            include: {
                author: true,
                assignee: true,
                attachments: true,
                comments: true
            }
        });
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ message: "Error retriving tasks" });
    }
});
exports.getTasks = getTasks;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, priority, tags, startDate, endDate, dueDate, points, projectId, authorUserId, assignedUserId } = req.body;
    try {
        const newtask = yield prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId
            }
        });
        res.status(200).json(newtask);
    }
    catch (error) {
        res.status(500).json({ message: `Error creating task ${error.message} ` });
    }
});
exports.createTask = createTask;
const updateTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.query);
        const { taskId } = req.params;
        const { status } = req.body;
        const update = yield prisma.task.update({
            where: {
                id: Number(taskId)
            },
            data: {
                status: status
            }
        });
        res.json(update);
    }
    catch (error) {
        res.status(500).json({ message: `Error updating tasks: ${error.message}` });
    }
});
exports.updateTaskStatus = updateTaskStatus;
