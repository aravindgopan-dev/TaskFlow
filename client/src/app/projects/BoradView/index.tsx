import { useGetTasksQuery, useUpdateTaskMutation } from '@/state/api';
import React from 'react'

type BoradProps = {
    id:string;
    setIsModalNewTaskOpen: (isopen: boolean) => void;


}
    const taskStatus=["To Do","Work In Progress","Under Review","Completed"]
    const BordView = ({id,setIsModalNewTaskOpen}:BoradProps) => {
    const {data:tasks,isLoading,error}=useGetTasksQuery({projectId:Number(id)})
    const [updateTaskStatus]=useUpdateTaskMutation()
    const moveTask=(TaskId:number,ToStatus:string)=>{
        updateTaskStatus({taskId:TaskId,status:ToStatus})
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>An error occurred while fetching tasks</div>;
  return (
    <div>index</div>
  ) 
}

export default BordView