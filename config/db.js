const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// const connectDB = () => {
//   mongoose.connect(db);
// };

// Prints "MongoServerError: bad auth Authentication failed."
mongoose
  .connect(db, {
    serverSelectionTimeoutMS: 5000,
  })
  .catch((err) => console.log(err.reason));

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(db);
// }

//     console.log('MongoDB Connected...');
//   } catch (err) {
//     console.error(err.message);
//     process.exit(1);
//   }
// };

exports.connectDb = connectDb;
