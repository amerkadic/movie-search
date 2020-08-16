import createError from "http-errors";

import CollectionService from "../services/collection.service";

exports.getCollection = async function (req, res, next) {
    try {
        const items = await CollectionService.getCollection(req.user.id);
        if (!items) return next(createError(400, 'No items'))
        res.status(200).json(items);
    } catch (err) {
        next(err)
    }
};

exports.addInCollection = async function (req, res, next) {
    const { name, poster, type, itemid } = req.body;

    try {
        const items = await CollectionService.findItem(itemid, req.user.id);
        if (!items) {
            const item = await CollectionService.saveItem(req.user.id, name, poster, type, itemid);
            res.status(200).json(item);
        }
    } catch (err) {
        next(createError(400, 'Bad request'))
    }
};

exports.deleteCollection = async function (req, res, next) {
    try {
        const items = await CollectionService.deleteItem(req.params.id);
        res.status(200).json({ success: true });
    } catch (err) {
        next(createError(400, 'Bad request'))
    }
};