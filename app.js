"use strict";
var fs = require('fs');// allows server to read and write to files
var logger = require('morgan');
var express = require('express');
var mongo = require('mongodb');
var app = express();
var mongoose = require('mongoose');
var Promise = require("bluebird");
mongoose.Promise = Promise;
var session = require('express-session');
var connectRedis = require('connect-redis')(session);
var bodyParser = require('body-parser'); // renders content from the front end to be used in the back end
var cookieParser = require("cookie-parser");
var datetime = require('node-datetime');// used to create a "now" date and time for the server
var moment = require('moment');
var assert = require('assert');
const path = require('path');
var server = require('http').createServer(app);





// Sets up the Express app to handle data parsing


app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(session({ secret: "This information is secret" }));



app.use(express.static('public'));  //set the base directory for static files like js and css



//************************************************************************

var Stock = require('./models/stock.js');


// ***********************************************************************
// Mongoose Connection
var url = 'mongodb://localhost:27017/AppliancesWorld';
mongoose.connect('mongodb://127.0.0.1/AppliancesWorld');
var db = mongoose.connection;

db.on("error", function (error) {
    console.log("mongoose error: ", error);
});
db.on("open", function () {
    console.log("mongoose connection successful: ");
});

// ******************************ROUTES*****************************************


app.get('/', function (req, res) {
        res.sendFile(__dirname + '/index.html');
});

app.get('/productpage', function (req, res) {
        res.sendFile(__dirname + '/public/html/products.html');
});

//Routes for FormPage
app.get('/formpage', function (req, res) {
        res.sendFile(__dirname + '/public/html/formbootstrap2.html');
});

app.post('/formpage/delete', function (req, res) {
    res.send('DELETE Request');
    var productName = req.body.DeleteName


        console.log(productName)

        Stock.findOneAndRemove({name: productName},function(err, stock){
            if (stock) {
                console.log("product found");
                console.log(stock)
                res.send(stock);
            }
            else if (!stock) {
                console.log('no product was found');
            }
        });

//         Stock.remove({name: productName }, function (error, stock) {
//             console.log(stock)

//          if (stock) {
//              console.log("product found");
//              res.send(stock);
//          }
//          else if (!stock) {
//              console.log('no product was found');
//              res.sendFile(error);
// z
//          }
//         });
    });

app.post('/formpage/add', function(req,res){
  console.log("Got a POST request for the form page");
  res.send('Hello POST');
});

app.get('/formpage/modify', function(req,res){
  console.log("Got a GET request for the modifying of page");
  res.send('Modify Form');
});

//formpage
/*function listener(req, res){
    var data = "";
    // serve static form
    if (req.method == "GET") {
        fs.readFile(__dirname + "/formbootstrap2.html", function(err, contents){
            res.end(contents);
        });
    }
    // handle form post
    if (req.method == "POST") {
        req.on("data", function(chunk) {
        // append received data
            data += chunk;
        });
        req.on("end", function() {
        // get key/value pairs from received data
            var params = querystring.parse(data);
            console.log(params);
            res.end(JSON.stringify(params));
        });
    }
}
*/

//app.post("/data", function(req, res) {
  //res.json(req.body);
//console.log(req.body);
//});

//formpage review
app.post('/addForm', function (req, res) {

  var newStock = {
    id: req.body.Id,
    itemType: req.body.ItemType,
    name:req.body.Name,
    Description: req.body.Description,
    Category: req.body.Category,
    Price: req.body.Price,
    Capacity: req.body.Capacity,
    Stackable: req.body.Stackable,
    SteamFunction: req.body.SteamFunction,
    Width: req.body.Width,
    Depth: req.body.Depth,
    Quantity: req.body.Quantity,
    Brand: req.body.Brand
    }

    console.log(newStock)
  var newStocks = new Stock(newStock);

    newStocks.save(function (err, newStocks) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newStocks);
            res.json(newStocks);
        }
    });
});



//search function for product page
app.post("/search", function(req, res) {
  var search = req.body.search
  Stock.find({
    $or:[{itemType:search}, {name:search}, {category:search}, {Brand:search}]}),  function(err, user)
   {
      if (err)
   {
       res.send(err);
   }
   console.log(user)
   res.json(user);
    }

  });

app.get("/brand/:brand", function (req, res) {
    Stock.find({Brand: req.params.brand }, function (err, result) {
        if (err) {
            console.log(error);
        }
        else {
            console.log("inside of brand route");
            console.log(result)
            res.json(result);
        }
    });
});

app.get("/price/:price", function (req, res) {
    Stock.find({price: req.params.Price}, function (err, result) {
        if (err) {
            console.log(error);
        }
        else {
            console.log(result)
            res.json(result);
        }
    });
});

// **********************************PROFILE*************************************

//Takes care of the current page for front-end html(makes sure routes correspond)
app.get("/products", function (req, res) {
    Stock.find({}, function (err, result) {
        if (err) {
            console.log(error);
        }
        else {
            console.log(result)
            res.json(result);
        }
    });
});

app.get("/products/:itemType", function (req, res) {
    Stock.find({itemType: req.params.itemType}, function (err, result) {
        if (err) {
            console.log(error);
        }
        else {
            console.log(req.params.itemType)
            console.log(result)
            res.json(result);
        }
    });
});

app.get("/products/:itemType/:category", function (req, res) {
    Stock.find({itemType: req.params.itemType,
                Category:req.params.category}, function (err, result) {
        if (err) {
            console.log(error);
        }
        else {
           console.log(req.params.itemType)
            console.log(req.params.category)
            console.log(result)
            res.json(result);
        }
    });
});

/*app.get("/product/:itemType", function (req, res) {
    Stock.find({Description: { $regex: new RegExp("^" + thename.toLowerCase(), "i") }
    req.params.itemType}, function (err, result) {
        if (err) {
            console.log(error);
        }
        else {
            console.log(req.params.itemType)
            console.log(result)
            res.json(result);
        }
    });
});
*/

server.listen(process.env.PORT || 3000);
console.log('Server is running on port 3000!');
