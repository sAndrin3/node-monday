import express from "express";
import {users} from './data.js'

const app =express()
app.use(express.json())

app.get('/users',(res, req) => {
    res.json(users)
})
app.get('/users/:id', (req, res) =>{
    const {id} = req.params
    const user = users.filter((user) => user.id === id)
    res.json(user)
})

app.post('/users', (req, res)=> {
    try{
        const {id, name} =  req.body;
        console.log(id, name);
        users.push({id, name});
        res.json(users)
    } catch (error) {
        res.json(error)
    }
   
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    res.json(users.filter((user) => user.id !==id ))
})
app.patch('/users/:id', (req, res)=> {
    const {id} = req.params
    const {name} = req.body
    let user1 =users.find((user) => user.id === id)
    user1.name = name
    res.json(user1)
})

app.put('/users/:id', (req, res)=> {
    const {id} = req.params
    const {name} = req.body
    let user1 =users.find((user) => user.id === id)
    user1.name = name
    res.json(user1)
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});
