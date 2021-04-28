module.exports = app => {
    app.get('/api/hello', (req, res) => {
        res.json("hello!");
    })
}