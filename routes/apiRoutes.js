const router = require('express').Router();
const fs = require('fs');
const savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));




router.get('/notes/', (req, res) => {
  res.json(savedNotes);
  // res.json(savedNotes[req.params.id])
});

// router.get('/notes/:id', (req,res) => {
//   res.json(notes[req.params.id]);
//   // module.id = nanoid()
// })

router.post('/notes', (req, res) => {
    let pushedNotes = req.body;
    savedNotes.push(pushedNotes);
    console.log('Saved!')
    fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
    res.json(savedNotes);
})



module.exports = router;