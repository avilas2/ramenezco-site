const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const SquareConnect = require('square-connect');



//Initialize App
const app = express();
const port = process.env.PORT || 3000;

//Initialize Square-Connect
const defaultClient = SquareConnect.ApiClient.instance;
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'EAAAEFCLgXer6PC-swOdL1znK_NcFTsSrym0gNMF9fe3nTu23_JU-ojsXeRB9w1J';

const apiInstance = new SquareConnect.CustomersApi();
const body = new SquareConnect.CreateCustomerRequest();


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
        title: 'Ramenezco Rewards'
    });
});

app.post('/rewards/join', function(req,res){
    res.send(req.body);
    apiInstance.createCustomer(req.body).then(function(data){
        console.log('API called succesfully' + data);

    }, function(error){
        console.error(error);
    });
});



app.listen(port, function(){
    console.log('Server running on port '+port);
})
