const express = require('express');
const cors = require('cors');
const app = express();


// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(8000, () => console.log("Runnung!"));


app.use('/api/store', require('./routers/storeRouter'))



app.get('/', (req, res) => res.send("<h2>Printify API</h2>"));



