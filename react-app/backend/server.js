const express = require('express');
const app = express();

const cors = require('cors');

//middlewaire
app.use(cors());
app.use(express.json())

//routes
app.post('/api/users/:id/update', (req,res)=>{
    setTimeout(()=>{
        res.send(req.body)
    }, [2000]);
});

//PORT
const port = 8800 || process.env.PORT
app.listen(port, ()=>{
    console.log(`listening to ${port}`)
})