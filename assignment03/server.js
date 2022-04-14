const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(5000, function (err) {
  if (err) console.log(err);
});
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Listening on ${PORT}`));

const bodyparser = require("body-parser");
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const unicornSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  loves: [String],
});
const unicornModel = mongoose.model("unicorns", unicornSchema);
// const mongoose = require("mongoose");
// //COMP1537:COMP1537@cluster0.ytble.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// mongoose.connect(
//   "mongodb+srv:COMP1537:COMP1537@cluster0.ytble.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// const unicornSchema = new mongoose.Schema({
//   name: String,
//   weight: Number,
//   loves: [String],
// });
// const unicornModel = mongoose.model("unicorns", unicornSchema);

app.post("/findUnicornByName", function (req, res) {
  console.log("req. has been recieved");
  console.log(req.body.unicornName);

  unicornModel.find({ name: req.body.unicornName }, function (err, unicorns) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Data " + unicorns);
    }
    res.send(unicorns);
  });
});

app.post("/findUnicornByFood", function (req, res) {
  console.log("req. has been recieved");
  console.log(req.body.appleisChecked);
  console.log(req.body.carrotisChecked);
  alist = [];
  if (res.body.appleisChecked == "checked") alist.push("apple");

  if (res.body.carrotisChecked == "checked") alist.push("carrot");

  unicornModel.find(
    {
      loves: {
        $or: alist,
      },
    },
    function (err, unicorns) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Data " + unicorns);
      }
      res.send(unicorns);
    }
  );
});

app.post("/findUnicornByWeight", function (req, res) {
  console.log("req. has been recieved");
  console.log(req.body.unicornName);
  alist = [];
  if (res.body.weightisChecked == "checked") alist.push("weight");

  if (res.body.nameisChecked == "checked") alist.push("name");
  unicornModel.find(
    { name: req.body.unicornName },
    { weight: req.body.lowerWeight, weight: req.body.higherWeight },

    function (err, unicorns) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("result " + unicorns);
      }
      res.send(unicorns);
    }
  );
});

app.use(express.static("./public"));
