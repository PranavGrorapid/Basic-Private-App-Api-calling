const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");

const app_Token = "pat-na1-ede8ebc9-380e-407f-8d41-a5804695db6d";

app.get("/", async (req, res) => {
  const contactApi = "https://api.hubapi.com/crm/v3/objects/contacts";

  const headers = {
    Authorization: `Bearer ${app_Token}`,
    "Content-Type": "application/json",
  };

  try {
    const { data } = await axios.get(contactApi, { headers });

    return res.json(data.results);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
