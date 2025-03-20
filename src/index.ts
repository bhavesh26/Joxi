import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/jokes' , (req , res)=> {
    //query params that indicates type of jokes
    //fetch it from db
    res.status(200).json({
        data : {
            message : 'jokes will be served sooon!'
        }
    })
})

app.put('/jokes/:id' , (req,res)=> {
    //requires authorization

})

app.post('/jokes' , (req,res)=> {
    //requries authorization
    //post jokes
})

app.delete('/jokes/:id' , (req,res)=> {
    //delete jokes
    //authmiddleware only user posted can delete or community head can delete it

})

app.post('/community' , (req,res)=> {
    //user can create a community based on jokes and type of people
})

app.post('/community/user' , (req,res)=> {
    //add some user to community
})

app.delete('/community/user/:id' , (req,res)=> {
    //delete a particular user from community
})

app.listen(3000 , ()=> {
    console.log("server started")
})

