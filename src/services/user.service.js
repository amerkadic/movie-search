import User from '../models/User';


exports.getUserByEmail = async function (email) {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (err) {
        next(err)
    }
}

exports.saveUser = async function (name, email, password) {
    const newUser = new User({
        name,
        email,
        password
    });

    try {
        const savedUser = await newUser.save();
        if (!savedUser) return next(createError(500, 'Could not save user'))
        return savedUser;
    } catch (err) {
        next(err)
    }
}

exports.getUser = async function (query) {
    try {
        const user = await User.findById(query).select('-password');
        return user;
    } catch (err) {
        next(err)
    }
}

