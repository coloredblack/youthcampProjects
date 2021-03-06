const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
const conn = mongoose.connection;
conn.on('error', () => {
  console.error("Database connection failed")
});

conn.on("open", async () => {
  const Schema = mongoose.Schema({
    category: String,
    name: String
  });

  const Model = mongoose.model("new", Schema);
  try {
    let r = await Model.create({
      category: "温带水果",
      name: "苹果",
      price: 5
    });
    console.log("insert data: ", r)
    
    r = await Model.find({ name: "苹果" });
    console.log("Search Result: ", r)
  } catch (err) {
    console.log(err);
  }
});
