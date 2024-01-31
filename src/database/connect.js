const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.uglfhgv.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("Erro ao se conectar ao banco de dados"), error;
      }
      return console.log("Conectado ao banco de dados com sucesso!");
    }
  );
};

module.exports = connectToDatabase;
