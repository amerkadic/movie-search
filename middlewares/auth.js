import jwt from 'jsonwebtoken';
import config from '../config';
import createError from "http-errors";

const { JWT_SECRET } = config;

export default (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token)
        return next(createError(401, 'No token, authorizaton denied'))
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        next(createError(400, 'Token is not valid'))
    }
};