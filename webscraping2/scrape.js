const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const port = 4000;
const url = "https://en.wikipedia.org/wiki/U.S._state";

let states = [];

const fetchData = async () => {
  try {
    let response = await axios.get(url);
    let $ = await cheerio.load(response.data);
    $(
      "#mw-content-text > div.mw-parser-output > div.div-col > div > ul > li > a"
    ).each((i, e) => {
      states.push($(e).text().trim());
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();

app.get("/state", (req, res) => {
  res.send(states);
});

app.listen(port, () => console.log("Server running"));
