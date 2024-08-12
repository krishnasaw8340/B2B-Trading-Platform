import React from 'react'
import { useParams, Link } from 'react-router-dom'

const VegSubCategory = () => {
  const {vegetablename, vendorid} = useParams()
  return (
    <div>VegSubCategory Product is coming: {vegetablename} and the vendorId is {vendorid}
    <div>
      {/* Product page  */}
      <div className='h-100 w-100% flex lg:flex-row'>
          {/* left area  */}
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequuntur similique quaerat numquam impedit nulla enim, ullam accusamus dignissimos at?</p>
        </div>

        {/* right area  */}
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A odit ipsam iure? Corrupti cupiditate corporis reprehenderit, illum numquam illo a.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default VegSubCategory