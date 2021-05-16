const fs = require('fs')
const data = require("../db/db.json");
const { v4: uuidv4 } = require('uuid');
//Unique ID?
// use: npm install uuid

module.exports = (app) => {

    //Current notes
    app.get('/api/notes', (req, res) => res.json(data));

    app.post('/api/notes', (req, res) => {
        
        const ID = uuidv4();
        req.body["id"] = ID
        console.log(req.body)
        data.push(req.body)

        fs.writeFile('./db/db.json', JSON.stringify(data, null, "\t"), (err) =>
        err ? console.error(err) : res.json({msg:"Note added."}))
    });

    //handle delete request at /api/notes/:deleteid
    // id value is in deleteid param
    for (var i=0; i<=data.length-1; i++) {
       for (key of obj) {
        if (key="id") {
            if (obj[key] === deleteid) {
                data.splice(i, 1)
            }
        } 
        }
    }
    fs.writeFile('./db/db.json', JSON.stringify(data, null, "\t"), (err) =>
    err ? console.error(err) : res.json({msg:"Note deleted."}))

}