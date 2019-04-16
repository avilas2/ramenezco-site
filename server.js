const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');



const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req,res){
    res.render('index', {
        title: 'Ramenezco'
    });
});

app.listen(port, function(){
    console.log('Server running on port '+port);
})
