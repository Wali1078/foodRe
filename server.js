const express = require("express")
const cores = require("cors")
const axios =  require("axios")
const fs = require("fs")
const path = require("path")


const app = express();
const port = process.env.PORT || 3005;

app.use(cores());

//https://www.themealdb.com/api/json/v1/1/categories.php

app.get("/categories", async(req, res)=> {

    try{
        let URL = `https://www.themealdb.com/api/json/v1/1/categories.php`
        const response  = await axios.get(URL)
        res.send(response.data)

    }
    catch(e){
       res.send(e); 
    }
})
app.get("/categories_ru", async(req, res)=> {

    try{
        res.sendFile(__dirname + "/categories_ru.json")

    }
    catch(e){
       res.send(e); 
    }
})



app.listen(port, () =>{
    console.log(port)
})