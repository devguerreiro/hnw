const crypto = require("crypto");

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

module.exports = {
  decrypt,
};
