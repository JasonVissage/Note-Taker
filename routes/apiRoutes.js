const router = require('express').Router();
const fs = require('fs');
const savedNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"));


router.get('/notes', (req, res) => {
  res.json(savedNotes);
});

router.post('/notes', (req, res) => {
    let pushedNotes = req.body
    savedNotes.push(pushedNotes);
})

fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
res.json(savedNotes);

module.exports = router;