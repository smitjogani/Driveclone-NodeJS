const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required: [true, 'File path is required']   
    },
    originalname:{
        type: String,
        required: [true, 'Original name is required']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required'] 
    }
});

module.exports = mongoose.model('File', fileSchema);