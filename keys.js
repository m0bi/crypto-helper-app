require("dotenv").config();

module.exports = {
    redis_key: process.env.REDIS,
    secret_key: process.env.SECRET,
    mongo_key: process.env.MONGO
};

  