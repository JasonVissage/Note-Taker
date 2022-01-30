const router = require('express').Router();
const fs = require('fs');
const savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));


router.get('/notes', (req, res) => {
  res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    let pushedNotes = req.body;
    savedNotes.push(pushedNotes);
    console.log('Saved!')
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(savedNotes);
})



module.exports = router;