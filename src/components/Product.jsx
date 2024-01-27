import React, { useEffect, useState } from 'react'
import './Product.css'


function Product() {
   const[item,setItem] =useState([])
   useEffect(()=>{
    getProducts()
   },[])
   async function getProducts(){
    const data = await fetch("https://fakestoreapi.com/products")
    const json=await data.json()
    setItem(json)
   }
  return (
    <div className='Pmain'>
        { console.log(item)}
        {
            item.map((pros)=>(
                <div>
                    <h6 className='ptitle'>{pros.title}</h6>
                    <img src={pros.image} alt="" className='pimage' />
                </div>
            ))
        }
    </div>
  )
}

export default Product