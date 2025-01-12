const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('firebase-admin');
const serviceAccount = require('../business-directory-9f54c-firebase-adminsdk-5ti6x-53137eadab.json');

// Initialize Firebase
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    storageBucket: 'business-directory-9f54c.appspot.com'
});

const storage = firebaseStorage({
    bucketName: 'business-directory-9f54c.appspot.com',
    credentials: {
        clientEmail: serviceAccount.client_email,
        privateKey: serviceAccount.private_key,
        projectId: serviceAccount.project_id
    }
});

const upload = multer({
    storage: storage,
});

module.exports = upload;