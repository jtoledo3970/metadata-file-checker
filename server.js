'use strict';

var express = require('express'),
    cors    = require('cors'),
    multer  = require('multer'),
    storage = multer.memoryStorage(),
    upload  = multer({storage: storage}),
    app     = express();

// Use Declarations
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

// GET Declerations
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  res.json({
    "name": req.file.originalname,
    "type" : req.file.mimetype,
    "size" : req.file.size
  });
});

// Boilerplate
app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
