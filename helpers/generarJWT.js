const crypto = require("crypto");

function generarSemilla(longitud) {
  return crypto.randomBytes(longitud).toString("hex");
}

const semilla = generarSemilla(32); // Genera una semilla de 32 bytes (256 bits)
console.log(semilla);
