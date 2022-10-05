const { Router } = require("express");
const sequelize = require("sequelize");
const axios = require("axios");
const router = Router();
const {
  getAllCriminals,
  postCriminal,
  getInfoByTitle,
} = require("../controllers/criminalControllers");

router.get("/", async (req, res) => {
  try {
    const criminals = await getAllCriminals();
    res.status(201).json(criminals);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/", async (req, res) => {
  const {
    title,
    classification,
    gender,
    image,
    subjects,
    reward_text,
    urlocal,
  } = req.body;
  try {
    const criminal = await postCriminal(
      title,
      classification,
      gender,
      image,
      subjects,
      reward_text,
      urlocal
    );
    res.status(201).json("Criminal created");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.get("/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const getCriminal = await getInfoByTitle(title);
    res.status(201).json(getCriminal);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

module.exports = router;
