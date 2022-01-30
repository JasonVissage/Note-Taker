const router = require('express').Router();
const fs = require('fs');
const savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));


router.get('/notes/', (req, res) => {
  res.json(savedNotes);
});

// router.get('/notes/:id', (req,res) => {
//   res.json(notes[req.params.id]);
// })

router.post('/notes', (req, res) => {
  // this way saves the notes but can't edit or delete
    let pushedNotes = req.body;
  // this way does not save notes but I think I need the ID to edit notes
    // let pushedNotes = req.body.id;
    savedNotes.push(pushedNotes);
    console.log('Saved!')
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(savedNotes);
})



module.exports = router;