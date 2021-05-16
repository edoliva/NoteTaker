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

    

}