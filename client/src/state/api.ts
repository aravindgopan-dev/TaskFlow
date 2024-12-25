import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Result } from "postcss";

export interface Project {
    id: number;
    name: string;
    description?: string;
    startDate?: string;
    endDate?: string;
}

export enum Priority {
    Urgent = "Urgent",
    High = "High",
    Medium = "Medium",
    Low = "Low",
    Backlog = "backlog"
}

export enum Status {
    ToDo = "To DO",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed"
}

export interface User {
    UserId?: number;
    userName?: string;
    email?: string;
    profilePictureUrl?: string;
    cognitoId?: string;
    teamId?: string;
}

export interface Attachments {
    id: number;
    fileUrl: string;
    fileName: string;
    taskId: string;
    uploadedById: number;
}

export interface Comment {
    id: number;
    text: string;
    taskId: number;
    userId: number;
    task: Task;
    user: User;
}

export interface Task {
    id: number; // Change 'Number' to 'number'
    title: string;
    description?: string;
    status?: Status;
    priority?: Priority;
    tags?: string;
    startDate?: string;
    endDate?: string;
    dueDate?: string;
    points?: number;
    projectId: number;
    authorUserId?: number;
    assignedUserId?: number;
    author?: User;
    assignee?: User;
    attachments?: Attachments[];
    comments?: Comment[];
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    reducerPath: "api",
    tagTypes: ["Projects", "Tasks"],
    endpoints: (build) => ({
        getProject: build.query<Project[], void>({
            query: () => "projects",
            providesTags: ["Projects"]
        }),
        createProject: build.mutation<Project, Partial<Project>>({
            query: (project) => ({
                url: "projects",
                method: "POST",
                body: project
            }),
            invalidatesTags: ["Projects"]
        }),
        getTasks: build.query<Task[], { projectId: number }>({
            query: ({ projectId }) => `tasks?projectId=${projectId}`,
            providesTags: (result) =>
                result
                    ? result.map(({ id }) => ({ type: "Tasks" as const, id })) // Ensure 'id' is a primitive number
                    : [{ type: "Tasks" as const }],
        }),

        createTask: build.mutation<Task, Partial<Task>>({
            query: (task) => ({
              url: "tasks",
              method: "POST",
              body: task,
            }),
            invalidatesTags: ["Tasks"], // Correctly invalidating the "Tasks" cache tag
          }),
          updateTask: build.mutation<Task, {taskId:number,status:string}>({
            query: ({taskId,status}) => ({
              url: `tasks/${taskId}/status`,
              method: "PATCH",
              body: {status},
            }),
            invalidatesTags: (result,error,{taskId})=>[
                {type:"Tasks",id:taskId},
            ], // Correctly invalidating the "Tasks" cache tag
          }),


          

        
    }),
});

export const {
      useGetProjectQuery,
      useCreateProjectMutation,
      useGetTasksQuery ,
      useCreateTaskMutation,
      useUpdateTaskMutation} = api;
