const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require("path")
const routes = require('./api')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => console.log('now listening'))