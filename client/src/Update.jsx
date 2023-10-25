import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import axios from 'axios';
import style from './book.module.css'
const Update = () => {
    const navigate=useNavigate()
    const { id } = useParams()
    // console.log(id)
    const [title,setTitle]=useState("")
    const [image,setImage]=useState("")
    const [decs,setDecs]=useState("")
    const handleclick=async(e) => {
      e.preventDefault();
     const res= await axios.put(`http://localhost:5000/books/${id}`,{title,image,decs})
      if(res.status){

        navigate('/');
      }
     if(res.statusText=='ok'){
     }
    }
  return (
    <div className={style.upContainer}>
    <div className={style.subContainer}>
        <h1>UPDATE</h1>
      <input type="text" placeholder='Title...' className={style.input}
       onChange={(e)=>setTitle(e.target.value)}
      />
      <input type="text" placeholder='Imgae....' className={style.input}
      onChange={(e)=>setImage(e.target.value)}
       />
      <textarea placeholder='Description....' cols="30" rows="10" className={style.input}
      onChange={(e)=>setDecs(e.target.value)}
      ></textarea>
      <button className={style.btn} onClick={handleclick}>Update Now</button>
      </div>
    </div>
  )
}

export default Update
