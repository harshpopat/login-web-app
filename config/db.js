const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

//   mongoose.connect(db, {
//     serverSelectionTimeoutMS: 5000,
//   });
// };
// .catch((err) => console.log(err.reason));

module.exports = connectDB;
