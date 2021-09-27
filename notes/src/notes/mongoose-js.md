```js
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

    // 6.更新，updateOne返回Query
    r = await Model.updateOne({ name: "苹果" }, { $set: { name: '芒果' } });
    console.log("更新结果：", r);

    // 7.删除，deleteOne返回Query
    r = await Model.deleteOne({ name: "苹果" });
    console.log("删除结果：", r);
  } catch (err) {
    console.log(err);
  }
});

```