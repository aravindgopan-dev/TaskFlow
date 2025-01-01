"use client";

import React, { use, useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import BordView from "../BoradView";
import ListView from "../ListView";
import TableView from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: Promise<{ id: string }>;
};

function Page({ params }: Props) {
 
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<string>("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return (
    <div>
      {/* Header section */}
      <ModalNewTask 
      isOpen={isModalNewTaskOpen}
      onClose={()=>setIsModalNewTaskOpen(false)}
      id={id}
      
      ></ModalNewTask>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Add more components or logic as needed */}
      {activeTab==="Board" &&(
        <BordView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}></BordView>
      )}
      {activeTab==="List" &&(
        <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}></ListView>
      )}
      {activeTab==="Table" &&(
        <TableView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}></TableView>
      )}
      
    </div>
  );
}

export default Page;
