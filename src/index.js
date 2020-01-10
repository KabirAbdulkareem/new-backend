
import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.get('/', (req, res) =>{
    console.log('from get method')
})

app.listen(5000, ()=>{
    console.log(`Web App listening on PORT: ${PORT}`)
})







