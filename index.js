import express from 'express'
import  emailRouter  from './routes/email.route.js'
import cors from 'cors'

const app = express()
const corsOptions = {
    origin: process.env.CLIENT_URL, // Allow only this domain
    methods: ["GET", "POST"], // Allow specific methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
  };
  
app.use(cors(corsOptions));
app.use(express.json())

app.use('/email',emailRouter)

app.use((err,req,res,next)=>{
    console.log(err.message||"error")
    res.staus(500).json("Something went wrong")
})
app.listen(process.env.PORT,()=>{
    console.log("server started at "+ process.env.API_URL)
})