import React, {useEffect, useState} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
const FruitsSubCategory = () => {
  const location2 = useLocation()
  const {vendorId} = useParams()
  
  return (
    <div>FruitsSubCategory</div>
  )
}

export default FruitsSubCategory