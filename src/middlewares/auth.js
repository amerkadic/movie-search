import jwt from 'jsonwebtoken';
import createError from "http-errors";

export default (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token)
        return next(createError(401, 'No token, authorizaton denied'))
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        next(createError(400, 'Token is not valid'))
    }
};