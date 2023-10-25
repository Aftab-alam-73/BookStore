import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './book.module.css'
import axios from 'axios'
const Add = () => {
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [decs,setDecs]=useState("")
    const navigate=useNavigate()
    const handleclick=async(e)=>{
       e.preventDefault()
       const res=await axios.post('http://localhost:5000/books/',{title,image,decs})
       if(res.status){

           navigate('/')
       }
    }
  return (
    <div className={style.upContainer}>
    <div className={style.subContainer}>
        <h1>ADD A BOOK</h1>
      <input type="text" placeholder='Title...' className={style.input}
       onChange={(e)=>setTitle(e.target.value)}
      />
      <input type="text" placeholder='Imgae....' className={style.input}
      onChange={(e)=>setImage(e.target.value)}
       />
      <textarea placeholder='Description....' cols="30" rows="10" className={style.input}
      onChange={(e)=>setDecs(e.target.value)}
      ></textarea>
      <button className={style.btn} onClick={handleclick}>ADD Now</button>
      </div>
    </div>
  )
}

export default Add
