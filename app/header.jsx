"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import SearchBar from '@/components/clients/SearchBar';

const header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='flex gap-5 bg-slate-500 h-11 py-4 px-4'>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/contact'}>Contact</Link>

      <SearchBar/>
    </div>
  )
}

export default header