require("dotenv").config({path: '../../.env'});

module.exports = {
    firebase_key: process.env.FIREBASE_KEY,
    firebase_auth: process.env.FIREBASE_AUTH,
    firebase_url: process.env.FIREBASE_URL,
    firebase_id: process.env.FIREBASE_ID,
    firebase_bucket: process.env.FIREBASE_BUCKET,
    firebase_sender: process.env.FIREBASE_SENDER 
  };

  