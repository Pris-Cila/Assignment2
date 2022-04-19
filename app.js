const express = require("express")
const req = require ("express/lib/request")
const res = require("express/lib/response")
const path = require("path")
const fetch = require ("node-fetch")
const { json } = require("body-parser")

const app = express()

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

app.get("/",(req,res) => {
    res.sendfile(path.join(__dirname, 'view/index.html'))
});

app.get("/anime_image",(req,res) => {
    res.sendfile(path.join(__dirname, 'view/DM.jpg'))
});

app.get("/anime_fact", (req,res) => {
    fetch ('https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer/5')
    .then(resp => resp.json())
    .then(json =>
        //res.send(`<img src="${json.source_url}" alt="Anime">`)
        res.send(`<h1>${json.data.fact}</h1>`)
        )
})

app.listen(3000, () => {
    console.log('Listen on port' + 3000);
});