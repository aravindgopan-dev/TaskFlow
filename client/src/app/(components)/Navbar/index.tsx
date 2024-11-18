import React from 'react'
import { Menu, Moon, Search, Settings, Sun } from 'lucide-react'
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import { setisDarkMode, setIsSidebarCollapsed } from '@/state'

type Props = {}

function index() {

    const  dispatch=useAppDispatch()
    const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)
  return (
    <div className='flex items-center justify-between bg-white px-4 py -3 dark:bg-black '>
        {/* search */}
        <div className='flex items-center gap-8'>
            {!isSidebarCollapsed?null:(

                <button onClick={()=>{dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}}>
                    <Menu className='h-8 w-8 dark:text-white'></Menu>
                </button>
            )}
            <div className='relative flex h-min w-[200px]'>
                <Search  className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
                <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 border-transparent focus:outline dark:text-white dark:bg-gray-700 dark:placeholder-white' type='search' placeholder='search ...' />
            </div>
        </div>
        <div className='flex items-center'>
            <button onClick={()=>dispatch(setisDarkMode(!isDarkMode))} className={isDarkMode?'rounded p-2 dark:hover:bg-gray-700':'rounded p-2 hover:bg-gray-100'}>
            {isDarkMode ? (
                <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
                ) : (
                <Moon className="h-6 w-6 cursor-pointer text-black" />
                )}
   
            </button>

            <Link href="/settings" className='w-min h-min rounded p-2 hover:bg-gray-100'>
                <Settings className='h-6  w-6 cursor-pointer dark:text-white'></Settings>
            </Link>
            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.rem] bg-gray-200 md:inline-block'>hiii</div>
        </div>
    </div>
  )
}

export default index