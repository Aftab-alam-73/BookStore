import React from 'react'
import style from './book.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Book = ({book}) => {
 const navigate=useNavigate()
 const handledelete=async(id)=>{
   await axios.delete(`http://localhost:5000/books/${id}`)
    location.reload()
 }
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
       <img src={book.img} alt="" className={style.img}/>
      </div>
      <div className={style.content}>
        <h3 className={style.title}>{book.Title}</h3>
        <p>
            {book.description}
        </p>
      </div>
      <div className={style.buttons}>
        <button className={style.btn} onClick={()=>navigate(`/update/${book.Id}`)}>Update</button>
        <button className={style.btn} onClick={()=>handledelete(book.Id)}>Delete</button>
      </div>
    </div>
  )
}

export default Book
