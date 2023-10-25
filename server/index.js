import express, { query } from 'express';
import cors from 'cors';
import mysql from 'mysql';
const app = express();
app.use(express.json());
app.use(cors())
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "aftaB@48",
    database:"test"
})

app.get('/books',(req, res) =>{
    const q="SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err){
            res.send(err.message)
        }else{
            res.json(data)
        }
    })
})
app.post('/books',(req,res)=>{
    console.log(req.body)
    const title = req.body.title
    const description=req.body.decs;
    const img=req.body.image
    const q=`INSERT INTO books(title,description,img) values('${title}','${description}','${img}')`
    db.query(q,(err,data) => {
        if(err)
        {
            res.json({status:false})
        }else{
            res.json( {status:true})
        }
    })
  
})
app.put('/books/:id',(req,res)=>{
    console.log(req.body)
    try{
       const q=`UPDATE BOOKS SET Title='${req.body.title}', Description='${req.body.decs}', img='${req.body.image}' WHERE id=${req.params.id}`
       db.query(q,(err,data)=>{
        if(err)return res.json({status:false})
        res.json({status:true})
       })
    }catch(err){
        res.json({status:false})
    }
})
app.delete('/books/:id',(req,res)=>{
    try{
      const q=`DELETE FROM books WHERE Id=${req.params.id}`;
      db.query(q,(err,data)=>{
        if(err)
        {
            res.json({status:false});
        }else{
            res.json({status:true});
        }
      })
    }catch(err){
         res.json(err.message) 
    }
})
app.listen(5000,()=>{
    console.log("seever is running on port number 5000")
    
})