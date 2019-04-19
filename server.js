const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Initialize App
const app = express();
const port = process.env.PORT || 3000;

//Set views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Middleware
//Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Public Folder
app.use(express.static(path.join(__dirname,'public')));

//Routes
app.get('/', function(req,res){
    res.render('index', {
        title: 'Ramenezco'
    });
});



//Rewards Routes
app.get('/rewards/join', function(req,res){
    res.render('rewards-join', {
        title: 'Ramenezco Rewards   '
    });
});

app.listen(port, function(){
    console.log('Server running on port '+port);
})
