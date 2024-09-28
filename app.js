const express = require('express');

//const fs = require('fs');

const content = require('./public/scripts/content');
const discoverdb = require('./public/scripts/discoverdb');

const app = express();


app.listen(5500);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

//mongo db

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


app.get('/show', (req, res) => {
    res.render('pages/voiraffichage', { title: 'Fitmate - Showing' } );
})

app.get('/', (req, res) => {
    res.render('pages/index', {title: 'Fitmate - Master Notion for Wellness and Life', content} );
})

app.get('/privacy_policy', (req, res) => {
    res.render('pages/privacy', {title: 'Fitmate - Privacy Policy'} );
})

app.use('*', (req, res) => {
  res.status(404).render('pages/404', {title: '404 - Error Page'} );
})