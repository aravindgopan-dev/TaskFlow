"use client";

import React, { use, useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader";
import BordView from "../BoradView";

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
      
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Add more components or logic as needed */}
      {activeTab==="Board" &&(
        <BordView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}></BordView>
      )}
    </div>
  );
}

export default Page;
