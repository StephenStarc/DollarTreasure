import express from 'express'


const port = process.env.PORT || 5000 
const app = express()

app.get('/', (req,res)=>{
res.send('API IS Running')
})

app.listen(port, ()=>{
console.log(`Server Running at ${port}`)
})