const fs = require('fs')
const data = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    //Current notes
    app.get('/api/notes', (req, res) => res.json(data));

    app.post('/api/notes', (req, res) => {

        const ID = uuidv4();
        req.body["id"] = ID
        console.log(req.body)
        data.push(req.body)

        fs.writeFile('./db/db.json', JSON.stringify(data, null, "\t"), (err) =>
            err ? console.error(err) : res.json({ msg: "Note added." }))
    });

    app.delete('/api/notes/:deleteid', (req, res) => {
        console.log(req.params.deleteid)
        const deleteid = req.params.deleteid
        for (var i = 0; i <= data.length - 1; i++) {
            console.log(data[i])
            for (key in data[i]) {
                if (key = "id") {
                    if (data[i][key] === deleteid) {
                        data.splice(i, 1)
                    }
                }
            }
        }
        fs.writeFile('./db/db.json', JSON.stringify(data, null, "\t"), (err) =>
            err ? console.error(err) : res.json({ msg: "Note deleted." }))
    })


}