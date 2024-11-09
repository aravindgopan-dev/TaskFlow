"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { LockIcon } from 'lucide-react';

function Index() {
  const [showProject, setShowProject] = useState(true);
  const [showPriority, setShowPriority] = useState(true);

  const SidebarClassName =
    "fixed flex flex-col shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white w-64";

  return (
    <div className={SidebarClassName}>
      {/* Sidebar Header */}
      <div className="flex flex-col justify-start bg-pink-300">
        {/* Header Section */}
        <div className="z-50 flex min-h-[56px] w-full items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">EDlist</h1>
        </div>

        {/* Team Section */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700 bg-white dark:bg-black">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <div>
            <h2 className="text-md font-bold tracking-wide dark:text-gray-200">Aravind Team</h2>
            <div className="mt-1 flex items-start gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
