export const validateColumn = (req, res, next) => {
    const column = req.body.column;
    if (['stage', 'chest', 'weapon'].indexOf(column) === -1) {
        return res.status(400).json({ error: `La columna "${column}" no es válida.` });
    }
    next();
};