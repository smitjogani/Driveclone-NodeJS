const Firebase = require('firebase-admin');
const serviceAccount = require('../business-directory-9f54c-firebase-adminsdk-5ti6x-53137eadab.json');

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'business-directory-9f54c.appspot.com'
})

module.exports = firebase;