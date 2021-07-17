const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

// Public static path

const static_path = path.join(__dirname, "../Public");
const template_path = path.join(__dirname, "../src/templates/views");
const partials_path = path.join(__dirname, "../src/templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));


// Routing

app.get("", (req, res)=>{
    res.render('index');
})

app.get("/about", (req, res)=>{
    res.render('about');
})

app.get("/weather", (req, res)=>{
    res.render('weather');
})

app.get("*", (req, res)=>{
    res.render('404error',{
        errorMsg:'OOPs! Page Not Found'
    })
})

app.listen(port, ()=>{
    console.log(`Listening at the port no. ${port}`)
})