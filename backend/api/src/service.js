const crypto = require("crypto");

const persistWebhook = process.env.PERSIST_WEBHOOK;
const cleanWebhook = process.env.CLEAN_WEBHOOK;

function decrypt(data) {
  const { algorithm, secretKey, encrypted } = data;
  const { iv, authTag, encrypted: encryptedText } = encrypted;

  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(secretKey, "hex"),
    Buffer.from(iv, "hex"),
  );
  decipher.setAuthTag(Buffer.from(authTag, "hex"));

  let decrypted = decipher.update(
    Buffer.from(encryptedText, "hex"),
    null,
    "utf8",
  );
  decrypted += decipher.final("utf8");

  return JSON.parse(decrypted);
}

function persist(data) {
  return fetch(persistWebhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

function clean() {
  return fetch(cleanWebhook, {
    method: "DELETE",
  });
}

module.exports = {
  decrypt,
  persist,
  clean,
};
