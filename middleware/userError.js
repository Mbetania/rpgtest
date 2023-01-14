app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).send({ message: 'Error interno del servidor' });
});
