import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

export default function Liste_produit() {
    const [produits, setProduits] = useState([])
    const [statut, setStatut] = useState("loading")
    const [search, setSearch] = useState("")

    useEffect(()=>{
      axios.get('http://localhost:3001/produit').then((res)=>{
        setProduits(res.data)
        setStatut("success")
        toast.success("chatgement de prosuit reussi")
      })
      .catch(()=>{
        setStatut("erreur")
        toast.error("erreur de chargement")
      })
    }, [])

  return (
    <div className='w-full text-white h-screen flex justify-center items-center gap-8 p-8 flex-col'>
      <h1 className='text-2xl font-bold'>Liste Produits</h1>
      <input onChange={(e)=> setSearch(e.target.value)} value={search} type="search" placeholder='Rechercher Produits' className='input-lg input'/>

      <div  className='w-[60%] h-[80%] flex  justify-center items-center flex-wrap gap-8 overflow-y-scroll'>
      { produits.map((produit) =>(
        <div key={produit.id}  className='w-[40%] h-[40%] shadow-2xl flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] '>
            <img className='w-full h-full object-cover' src={produit.image}/>
          </div>
          <div className='w-[40%] h-full flex flex-col gap-8 justify-center'>
              <h1> {produit.nom} </h1>
              <p> {produit.prix} BIF </p>
              <Link to={`/detail/${produit.id}`}><button className='btn btn-primary'>Detail</button></Link>
          </div>
        </div>
    ))}
      </div>
    </div>
  )
}
