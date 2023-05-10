import React from 'react'
import ServerComponent from '@/components/server/ServerComponent'
import Contact from './Contact'

const page = ({children}) => {
  return (
    <Contact>
        <ServerComponent/>
    </Contact>
  )
}

export default page