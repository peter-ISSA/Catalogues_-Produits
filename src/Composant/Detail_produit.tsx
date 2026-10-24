import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

type Produit = {
  id: number,
  title: string,
  price: number,
  image: string,
  category: string,
  description: string
}

export default function Detail_produit() {
  const [produit, setProduit] = useState<Produit | null>(null)
  const [statut, setStatut] = useState("loading")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{
      setProduit(res.data)
      setStatut("success")
      toast.success("Chragement Reussi")
      console.log(res.data);
      
    })
    .catch(()=>{
      setStatut("erreur")
      toast.error("erreur de chargement")
    })
  }, [id])
  return (
    <div className='text-black w-full h-screen bg-[whitesmoke] flex-col gap-1 text-2xl justify-center items-center flex'>
      <button className='bg-red-400 text-white p-2 rounded-md hover:bg-red-800 relative top-18 right-[40%] '>
        <Link to='/'>Retour</Link>
      </button>
      <h1 className='text-3xl font-bold mb-4'>Detail du Produit</h1>
      <div className='w-[60%] h-[80%] shadow-2xl bg-amber-50 flex justify-center items-center'>
        <div className='w-[30%] h-[70%] '>
          <img className='w-full h-full' src={produit?.image} />
        </div>
        <div className='w-[60%] h-[80%] p-5 flex flex-col justify-center overflow-y-scroll'>
          <p className='m-4'> <span className='font-bold'>Nom:</span>  {produit?.title} </p>
          <p className='m-4'><span className='font-bold'>Prix:</span>  {produit?.price}   </p>
          <p className='m-4'> <span className='font-bold'>Catégorie:</span>  {produit?.category}   </p>
          <p className='m-4'> <span className='font-bold'>Description:</span> {produit?.description}   </p>
        </div>
      </div>
    </div>
  )
}
