import axios from 'axios'
import React, { useEffect, useState } from 'react'

fetch("http://localhost:3001/produit").then((res)=>{
  res = res.json()
  res.then((result)=>{
    console.log(result)
  })
})

export default function Liste_produit() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

  return (
    <div className='w-full h-screen flex justify-center items-center gap-8 p-8 flex-col'>
      <h1 className='text-2xl font-bold'>Liste Produits</h1>
      <input onChange={(e)=> setSearch(e.target.value)} value={search} type="search" placeholder='Rechercher Produits' className='input-lg input'/>
      <div className='w-[60%] h-[80%] flex  justify-center items-center flex-wrap gap-8 overflow-y-scroll'>
        
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '></div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1>Hello</h1>
              <p>prix</p>
              <button className='btn btn-primary'>Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
