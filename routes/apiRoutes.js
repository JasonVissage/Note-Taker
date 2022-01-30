const router = require('express').Router();
const fs = require('fs');


router.get('/notes', (req, res) => {
    let savedNotes = fs.readFileSync(path.join(__dirname, "../db/db.json"));
    results = JSON.parse(savedNotes);
    console.log(results)
  res.json(results);
});

router.post('/notes', (req, res) => {
    // let postedNotes = fs.writeFile("../db/db.json")
    const pushedNotes = req.body;
    res.json(pushedNotes);
})


module.exports = router;