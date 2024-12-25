"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDownIcon, ChevronUpIcon, Home, Layers3, LockIcon, LucideIcon, Search, Settings, ShieldAlert, User, Users, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/redux';
import Link from 'next/link';
import { setIsSidebarCollapsed } from '@/state';
import { useGetProjectQuery } from '@/state/api';

function Index() {
  const [showProject, setShowProject] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const {data:projects}=useGetProjectQuery();

  const  dispatch=useAppDispatch()
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

  const SidebarClassName =
    `fixed flex flex-col shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed?"w-0 hidden":"w-64"}`;

  return (
    
    <div className={SidebarClassName}>
      {/* Sidebar Header */}
      <div className="flex flex-col justify-start ">
        {/* Header Section */}
        <div className="z-50 flex min-h-[56px] w-full items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">EDlist</h1>
          {isSidebarCollapsed?null:(<button className='py-3 ' onClick={()=>{dispatch(setIsSidebarCollapsed(true))}}>
          <X className='h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white'></X>
        </button>
        )}
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
        <nav className='z-10 w-full'>
          <SidebarLink icon={Home} href='/' label='home'></SidebarLink>
          <SidebarLink icon={Briefcase} href='/timeline' label='Timeline'></SidebarLink>
          <SidebarLink icon={Search} href='/search' label='Search'></SidebarLink>
          <SidebarLink icon={Settings} href='/settings' label='Settings'></SidebarLink>
          <SidebarLink icon={User} href='/users' label='Users'></SidebarLink>
          <SidebarLink icon={Users} href='/teams' label='Teams'></SidebarLink>
          
        </nav>
        <button onClick={()=>{setShowProject((prev)=>!prev)}}
          className='flex w-full items-center justify-between px-8 py-3 text-gray-500'
          >
            <span className=''>Projects</span>
            {showProject?
            <ChevronUpIcon className='h-5 w-5'></ChevronUpIcon>
            :<ChevronDownIcon  className='h-5 w-5'></ChevronDownIcon>}
          
        </button>
            {showProject &&
            projects?.map((project) => (
              <SidebarLink
                key={project.id} 
                icon={Briefcase}
                label={project.name}
                href={`/projects/${project.id}`}
              />
              ))}





        <button onClick={()=>{setShowPriority((prev)=>!prev)}}
          className='flex w-full items-center justify-between px-8 py-3 text-gray-500'
          >
            <span className=''>Priority</span>
            {showPriority?
            <ChevronUpIcon className='h-5 w-5'></ChevronUpIcon>
            :<ChevronDownIcon  className='h-5 w-5'></ChevronDownIcon>}
          
        </button>
        {showPriority &&(
          <>
            <SidebarLink icon={AlertCircle} href='/priority/urgent' label='Urgent'></SidebarLink>
            <SidebarLink icon={ShieldAlert} href='/priority/high' label='High'></SidebarLink>
            <SidebarLink icon={AlertTriangle} href='/priority/medium' label='Medium'></SidebarLink>
            <SidebarLink icon={AlertOctagon} href='/priority/low' label='Low'></SidebarLink>
            <SidebarLink icon={Layers3} href='/priority/bl' label='Backlog'></SidebarLink>
          </>
        )}

      </div>
    </div>
  );
}


interface SidebarLinkProps{
  href:string,
  icon:LucideIcon,
  label:string,
  // isCollapesed:boolean
}

const SidebarLink=({
  href,
  icon:Icon,
  label,
  // isCollapesed
}:SidebarLinkProps)=>{
  const pathname=usePathname();
  const  isActive = pathname===href || (pathname=="/" && href==="/dashborad")
  return(
    <Link href={href} className='w-full'>
      <div
      className={`relative flex cursor-pointer items-center gap-3 
      hover:bg-gray-100 dark:hover:bg-gray-700 
      ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : "dark:bg-black"} justify-start px-8 py-3`}
      >
         {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200" />
        )}
         <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
         <span className={`font-medium text-gray-800 dark:text-gray-100`}>
          {label}
        </span>
      </div>
    </Link>
  )
 
}


export default Index;
