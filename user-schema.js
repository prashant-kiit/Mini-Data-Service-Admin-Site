import { Schema, model } from 'mongoose';

const Userschema = new Schema({

    userid: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }

});

export default model('Userschema',Userschema);