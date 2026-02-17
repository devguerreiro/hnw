require("dotenv").config();

const express = require("express");

const { decrypt, persist, clean } = require("./service");

const app = express();
const port = 3000;

const encryptedSource = process.env.ENCRYPTED_SOURCE;

console.log(encryptedSource);

let decrypted = null;

app.get("/decrypt", async (req, res) => {
  if (decrypted) {
    res.json(decrypted);
    return;
  }

  const encryptedResponse = await fetch(encryptedSource);
  if (!encryptedResponse.ok) {
    res.status(503);
    return;
  }

  const body = await encryptedResponse.json();

  decrypted = decrypt(body.data);

  persist(decrypted).then(() => {
    res.json(decrypted);
  });
});

app.delete("/decrypted", (req, res) => {
  clean().then(() => {
    decrypted = null;

    res.send();
  });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
