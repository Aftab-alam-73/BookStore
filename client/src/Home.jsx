import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from './book.module.css'
import Book from './Book';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [books,setBooks]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{ 
       const fetchbook= async()=>{
           try{
              const res= await axios.get('http://localhost:5000/books');
              if(res){
                setBooks(res.data)
              }
            }catch(err){
                console.log(err.message)
            }
        }
        fetchbook() 
    },[])
// console.log(books)
  return (
    <div className={style.cont}>
        <div className={style.logo}>
        Aftab Alam Books Store.
        <button className={style.add} onClick={()=>navigate('/add')}>Add a book</button>
        </div>
        <div className={style.Home}>

      {
         books.map((book)=>{
            return <Book book={book} key={book.Id}/>
         })
      }
        </div>
    </div>
  )
}

export default Home
