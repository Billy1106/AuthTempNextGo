console.log(
  "############################## Running 01-industries-init.js ##############################"
);
const fs = require("fs");
const json = fs.readFileSync(
  "docker-entrypoint-initdb.d/staffs.json",
  "utf8"
);
const data = JSON.parse(json);

var user = {
  user: "mongo",
  pwd: "mongo",
  roles: [
    {
      role: "dbOwner",
      db: "mongo_example"
    }
  ]
};

db.createUser(user);
db.createCollection('staffs');

Object.keys(data).forEach(function(key) {
  console.log("Insert", data[key]);
  db.staffs.insert(data[key]);
} );
