import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Detail_produit() {
  const [produit, setProduit] = useState( {} )
  const [statut, setStatut] = useState("loading")
  const {id} = useParams()

  useEffect(()=>{
    axios.get(`http://localhost:3001/produit/${id}`).then((res)=>{
      setProduits(res.data)
      setStatut("success")
      toast.success("Chragement Reussi")
    })
    .catch(()=>{
      setStatut("erreur")
      toast.error("erreur de chargement")
    })
  }, [id])
  return (
    <div className='text-white w-full h-screen flex-col gap-8 text-2xl justify-center items-center flex'>
        <h1>Detail du Produit</h1>
        <div className='w-[40%] h-[40%] border flex justify-center items-center gap-8'>
          <div className='w-[40%] h-[80%] border '>
            <img src={produit.image} />
          </div>
            <div className='w-[40%] h-full flex items-center flex-col gap-8 justify-center'>
            <p> {produit.id} </p>
            <p> prix: {produit.prix} </p>
            <p>categorie: {produit.categorie} </p>
            <p>Nom_vendeur: {produit.nom_vendeur} </p>
          </div>
      </div>
      </div>
  )
}
