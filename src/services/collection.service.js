import Collection from '../models/Collection';

exports.getCollection = async function (userid) {
    try {
        const items = await Collection.find({ userid });
        return items;
    } catch (err) {
        next(err)
    }
}

exports.findItem = async function (itemid, userid) {
    try {
        const items = await Collection.findOne({ itemid, userid });
        return items;
    } catch (err) {
        next(err)
    }
}

exports.saveItem = async function (userid, name, poster, type, itemid) {
    const newItem = new Collection({
        userid,
        name,
        poster,
        type,
        itemid
    });
    try {
        const item = await newItem.save();
        return item;
    } catch (err) {
        next(err)
    }
}


exports.deleteItem = async function (_id) {
    try {
        const items = await Collection.deleteOne({ _id });
        return items;
    } catch (err) {
        next(err)
    }
}