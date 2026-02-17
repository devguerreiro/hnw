require("dotenv").config();

const express = require("express");

const { decrypt, persist, clean, getDecrypted } = require("./service");

const app = express();
const port = 3000;

const encryptedSource = process.env.ENCRYPTED_SOURCE;

let decrypted = null;

app.get("/decrypt", async (req, res) => {
  const encryptedResponse = await fetch(encryptedSource);
  if (!encryptedResponse.ok) {
    res.status(503);
    return;
  }

  const body = await encryptedResponse.json();

  decrypted = decrypt(body.data).map((d) => ({
    id: d.id,
    name: d.nome,
    email: d.email,
    phone: d.telefone,
  }));

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

app.get("/decrypted", async (req, res) => {
  if (decrypted) {
    res.json(decrypted);
    return;
  }

  const response = await getDecrypted();

  try {
    decrypted = await response.json();

    res.json(decrypted);
  } catch (err) {
    res.json([]);
  }
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
