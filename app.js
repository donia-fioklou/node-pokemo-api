const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World majeur!')
}) 

app.get('/api/pokemon/:id',(req,res)=>{
  const id = req.params.id;
  res.send(`vous avez demandé le pokemon${id}` );
})

app.listen(port, () =>{
    console.log("notre demarre sur http://localhost:300");
})

