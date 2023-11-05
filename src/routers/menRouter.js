const express = require("express");
const router = new express.Router();
const MensRanking = require('../models/mens');

// Route for adding a new men's ranking record
router.post('/mens', async (req, res) => {
  try {
    // Create a new MensRanking document using the request body
    const addingMensRecords = new MensRanking(req.body);
    
    // Save the new record to the database
    const insertMens = await addingMensRecords.save();
    
    // Respond with the inserted record
    res.send(insertMens);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error inserting record.");
  }
});

// Route for getting all men's ranking records
router.get('/mens', async (req, res) => {
  try {
    // Find all Men's ranking records and sort them by "ranking" in ascending order
    const getMens = await MensRanking.find({}).sort({ "ranking": 1 });
    res.status(201).send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Route for getting a specific men's ranking record by ID
router.get('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    
    // Find a specific Men's ranking record by its ID
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Route for updating a specific men's ranking record by ID
router.patch('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    
    // Find and update a specific Men's ranking record by its ID with the request body
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true
    });
    
    // Respond with the updated record
    res.send(getMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Route for deleting a specific men's ranking record by ID
router.delete('/mens/:id', async (req, res) => {
  try {
    // Find and delete a specific Men's ranking record by its ID
    const getMen = await MensRanking.findByIdAndDelete(req.params.id);
    
    // Respond with the deleted record
    res.send(getMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
