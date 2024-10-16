const router = require('express').Router();

//Skapa från postad json
router.post("/", (req, res) => {
    res.status(201).json({id: 1, ...req.body});
});

//Hämta alla
router.get("/", (req, res) => {
    res.status(200).json([]);
});

//hämta alla med ID
router.get("/:id", (req, res) => {
    res.status(200).json({id: req.params.id});
});

//Uppdatera med ID
router.put("/:id", (req, res) => {
    res.status(200).json({id: req.params.id, ...req.body})
});

//Ta bort med ID
router.delete("/:id", (req, res) => {
    res.status(204).send(); //Måste se till att svaret skickas
});

module.exports = router;