import React from 'react'
import { useParams, Link } from 'react-router-dom'
const FarmMachineryProduct = () => {
  const {productname, vendorid} =  useParams();
  return (
    <div>FarmMachineryProduct is coming with name: {productname} and vendorID is {vendorid}</div>
  )
}

export default FarmMachineryProduct