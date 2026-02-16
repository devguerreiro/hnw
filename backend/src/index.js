const express = require("express");

const { decrypt } = require("./service");

const app = express();
const port = 3000;

const source = "https://n8n-apps.nlabshealth.com/webhook/data-5dYbrVSlMVJxfmco";

let decrypted = null;

app.get("/", async (req, res) => {
  if (decrypted) {
    res.json(decrypted);
    return;
  }

  const response = await fetch(source);

  if (!response.ok) {
    res.status(503);
    return;
  }

  const body = await response.json();

  decrypted = decrypt(body.data);

  res.json(decrypted);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
