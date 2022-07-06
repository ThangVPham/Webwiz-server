const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Tournament = require('./Model/tournament');
const cors = require('cors');
const { response } = require('express');
const DB_URI = 'mongodb+srv://ThangPham:PasswordThangPham@webwiz.jz3o0.mongodb.net/Tournament?retryWrites=true&w=majority'

mongoose.connect(DB_URI).then(()=>{
    console.log('Remote DB Connected');
    app.listen(process.env.PORT||5000,()=>{
        console.log('Server listening in port 5000')
    })
}).catch((e)=>{
    console.log(e);
})
app.use(bodyParser.json());
app.use(cors()); 

app.put('/tournaments/:id', async (req,res)=>{
    let tournament = req.body;
    let id = req.params.id
    await Tournament.updateOne({_id:id},tournament)
    res.end();
    

})


app.get('/tournaments/:id',async (req,res)=>{
    const id = req.params.id;
    let tournament = await Tournament.findById(id);
    res.send(tournament);

})

app.get('/', async (req,res)=>{
    let tournaments = await Tournament.find();
    res.send(tournaments)

})


app.post('/new-tournaments', async(req,res)=>{
    let newTourney = req.body;
    await Tournament.create(newTourney);
    res.end()
})

app.post('/addplayers/:id', async(req,res)=>{
    let id = req.params.id;
    let updatedTourney = req.body;
    
    await Tournament.updateOne({_id:id},updatedTourney)
    console.log('added players')
    res.redirect(`/tournaments/${id}`)
})
app.get('/addplayers/:id', async(req,res)=>{
    let tournament = await Tournament.findById({_id:req.params.id});
    res.send(tournament);
})