import { Router } from 'express';
import auth from '../middlewares/auth';
import Collection from '../models/Collection';

const router = Router();

router.get('/', auth, async (req, res) => {
    try {
        const items = await Collection.find({ userid: req.user.id });
        if (!items) throw Error('No items');
        res.status(200).json(items);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

router.post('/tvshow/add', auth, async (req, res) => {
    const newItem = new Collection({
        userid: req.user.id,
        name: req.body.name,
        poster: req.body.poster,
        type: req.body.type,
        itemid: req.body.itemid
    });
    const items = await Collection.findOne({ itemid: req.body.itemid, userid: req.user.id });
    try {
        if (items === null) {
            const item = await newItem.save();
            res.status(200).json(item);
        }
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

router.post('/movie/add', auth, async (req, res) => {
    const newItem = new Collection({
        userid: req.user.id,
        name: req.body.name,
        poster: req.body.poster,
        type: req.body.type,
        itemid: req.body.itemid
    });
    const items = await Collection.findOne({ itemid: req.body.itemid, userid: req.user.id });
    try {
        if (items === null) {
            const item = await newItem.save();
            res.status(200).json(item);
        }
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
    try {
        const item = await Collection.findById(req.params.id);
        if (!item) throw Error('No item found');
        const removed = await item.remove();
        res.status(200).json({ success: true });
    } catch (e) {
        res.status(400).json({ msg: e.message, success: false });
    }
});

export default router;