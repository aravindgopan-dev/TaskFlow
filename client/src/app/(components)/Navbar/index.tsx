import React from 'react'
import { Search, Settings } from 'lucide-react'
import Link from 'next/link'

type Props = {}

function index() {
  return (
    <div className='flex items-center justify-between bg-white px-4 py -3 dark:bg-black '>
        {/* search */}
        <div className='flex items-center gap-8'>
            <div className='relative flex h-min w-[200px]'>
                <Search  className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white'/>
                <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 border-transparent focus:outline dark:text-white dark:bg-gray-700 dark:placeholder-white' type='search' placeholder='search ...' />
            </div>
        </div>
        <div className='flex items-center'>

            <Link href="/settings" className='w-min h-min rounded p-2 hover:bg-gray-100'>
                <Settings className='h-6  w-6 cursor-pointer dark:text-white'></Settings>
            </Link>
            <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.rem] bg-gray-200 md:inline-block'>hiii</div>
        </div>
    </div>
  )
}

export default index