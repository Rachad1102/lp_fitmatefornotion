const express = require('express');
const Request = require('./models/requests')
const mongoose = require('mongoose')

//const fs = require('fs');

const content = require('./public/scripts/content');
const discoverdb = require('./public/scripts/discoverdb');

const app = express();


//connect to mongodb
const dbURI = 'mongodb+srv://rachadfousseni55:chfUkVDek5oLdsRY@requests.tz9ng.mongodb.net/requests';
mongoose.connect(dbURI)
.then((result) => console.log('connexion to mongodb successful'))
.catch((err) => console.log(err))

app.listen(5500)

//register view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//mongo db
//post in database the requests
app.post('/request', (req, res) => {
  //const {surname, email, message } = req.body;

   const request = new Request(req.body)
      
  request.save()
  .then((result) =>{
   res.redirect('/request')
  })
  .catch((err) =>{
   console.log(err)
  })

  //console.log({surname, email, message });
  //res.render('pages/request', {title: 'Fitmate - Master Notion for Wellness and Life'})
});

//view in a pages the requests

app.get('/viewsdbserequestfitfnotionrachadabd', (req, res) =>{

  Request.find().sort({createdAt: -1})
  .then((result) =>{
     res.render('pages/viewrequests', {title: 'Fitmate Requests', requests: result})
  })
  .catch((err) =>{
     console.log(err)
  })

});


//routes
app.get('/discover', (req, res) => {
  res.render('pages/discover', {title: 'Fitmate Discover', content : discoverdb})
})

app.get('/request', (req, res) => {
  res.render('pages/request', {title: 'Fitmate - Master Notion for Wellness and Life'})
})





app.get('/templates', (req, res) => {
  res.render('pages/templates', {title: 'Fitmate Templates', content})

})

app.get('/bundles', (req, res) => {
  res.render('pages/bundles', {title: 'Fitmate Bundles', content})

})

app.get('/templates/:contract', (req, res) => {
  const contract = req.params.contract;
  const id = content.findIndex(container => container.contractTitle === contract);
  res.render('pages/details', {title: 'Fitmate Templates - ' + content[id].title, content, id})
    
  })

app.get('/discover/:contract', (req, res) => {
  const contract = req.params.contract;
  const id = discoverdb.findIndex(container => container.contractTitle === contract);
  res.render('pages/discdetails', {title: 'Fitmate Discover - ' + discoverdb[id].title, discoverdb, id})
    
  })


app.get('/', (req, res) => {
    res.render('pages/index', {title: 'Fitmate - Master Notion for Wellness and Life', content} );
})

app.get('/policy', (req, res) => {
    res.render('pages/privacy', {title: 'Fitmate - Privacy Policy'} );
})

app.use('*', (req, res) => {
  res.status(404).render('pages/404', {title: '404 - Error Page'} );
})