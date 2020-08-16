import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createError from "http-errors";

import UserService from "../services/user.service";

exports.loginUser = async function (req, res, next) {
    const { email, password } = req.body;

    try {
        var user = await UserService.getUserByEmail(email)
        if (!user) return next(createError(400, 'Invalid credentials'))

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return next(createError(400, 'Invalid credentials'))

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 3600 });

        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });
    } catch (err) {
        next(err)
    }
};

exports.registerUser = async function (req, res, next) {
    const { name, email, password } = req.body;

    try {
        var user = await UserService.getUserByEmail(email)
        if (user) return next(createError(400, 'User already exist'))

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        var savedUser = await UserService.saveUser(name, email, hash)
        const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, {
            expiresIn: 3600
        });

        res.status(200).json({
            token,
            user: {
                id: savedUser.id,
                name: savedUser.name,
                email: savedUser.email
            }
        });
    } catch (err) {
        next(err)
    }
}

exports.getUser = async function (req, res, next) {
    try {
        var user = await UserService.getUser(req.user.id)
        if (!user) return next(createError(400, 'User does not exist'));
        res.json(user);
    } catch (err) {
        next(err)
    }
}

