const express = require("express");

const { decrypt } = require("./service");

const app = express();
const port = 3000;

const source = "https://n8n-apps.nlabshealth.com/webhook/data-5dYbrVSlMVJxfmco";

app.get("/", async (req, res) => {
  const response = await fetch(source);

  if (!response.ok) {
    res.status(503);
  } else {
    const body = await response.json();

    res.send(decrypt(body.data));
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
