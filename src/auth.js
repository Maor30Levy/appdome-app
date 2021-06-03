const auth = (req, res, next) => {
    try {
        const { user, pass } = req.body;
        if (user === 'Interview' && pass === 'SecretPass123')
            next();
        else throw new Error();
    } catch (err) {
        return res.status(401).send({ message: 'Not Authenticated.' })
    }
};
module.exports = auth;