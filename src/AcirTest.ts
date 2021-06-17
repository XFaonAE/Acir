const { Acir } = require("./Acir");
const config = require("../acir.json");

const acir = new Acir();
acir.run(config.main);