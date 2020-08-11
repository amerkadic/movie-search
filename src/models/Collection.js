
import { Schema, model } from 'mongoose';

const CollectionSchema = new Schema({
    userid: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    itemid: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Collection = model('collection', CollectionSchema);

export default Collection;