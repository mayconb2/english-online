const routes = require('express').Router()
var admin = require("firebase-admin");
var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-english-online.firebaseio.com"
});

let db = admin.database();
let userRef = db.ref("users");

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' })
})

routes.post('/add-something', (req, res) => {
    userRef.child('teste').set(req.body.xablau)
    res.status(200).json({ message: 'XABLAU' })
})

module.exports = routes
