// "use client"
import React from 'react'

const page = ({params}) => {
    console.log(params);
  return (
    <div>Hey I am products Id page {params.productsId}</div>
  )
}

export default page