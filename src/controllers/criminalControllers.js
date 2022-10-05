const axios = require("axios");
require("dotenv").config();

const { Criminal } = require("../db");

async function getAllCriminals() {
  try {
    const dbCriminals = await Criminal.findAll();
    const jsonCriminalsData = await Promise.all(
      dbCriminals.map(async (criminal) => criminal.toJSON())
    );

    return jsonCriminalsData;
  } catch (error) {
    throw new Error("getAllCriminals controller error");
  }
}

const postCriminal = async (
  title,
  classification,
  gender,
  image,
  subjects,
  reward_text,
  url

) => {
  try {
    const newCriminal = await Criminal.create({
      title,
      classification,
      gender,
      image,
      subjects,
      reward_text,
      url
    });
  } catch (error) {
    console.error(err);
  }
};
async function getInfoByTitle(title) {
  try {
    if (title.length > 0) {
      //If flama

      const getCriminalInfo = await Criminal.findOne({
        where: { title: title },
      });
      return getCriminalInfo;
    } else {
      throw new Error("Data must be correct");
    }
  } catch (error) {
    throw new Error("getInfoByTitle controller ERROR");
  }
}

module.exports = { getAllCriminals, postCriminal, getInfoByTitle };
