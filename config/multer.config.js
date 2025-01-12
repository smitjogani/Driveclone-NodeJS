const multer = require('multer');
const firebase = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../business-directory-9f54c-firebase-adminsdk-5ti6x-53137eadab.json');

const storage = firebaseStorage({
    credential: firebase.credential.cert(serviceAccount),
    bucketName: 'business-directory-9f54c.appspot.com'
})

const upload = multer({
    storage: storage,
})

module.exports = upload;