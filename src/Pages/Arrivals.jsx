import React from 'react'
import '../Styles/Arrivals.css'
import ProductsList from '../Components/ProductsList'

function Arrivals() {
  return (
    <div className='arrivalcontainer w-full text-center'>
      <div className="arrivalcontent w-10/12">
<div className="arriva">
<h1 className='font-extrabold tracking-wide'> NEW ARRIVALS</h1>
<ProductsList/>

</div>
<div className="topselling">
<h1 className='font-extrabold tracking-wide'>TOP SELLING</h1>
<ProductsList/>
</div>
    </div>
    </div>
  )
}

export default Arrivals