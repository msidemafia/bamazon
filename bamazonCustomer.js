var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });
  var results;
  // connect to the mysql server and sql database
  connection.query("SELECT * FROM products", function(err, data) {
    if (err) throw err;
    results = data;
    start();
  });
  
  // function which prompts the user for what action they should take
  function start() {
    inquirer
      .prompt(
    {
        name: "whichItem",
        type: "input",
        message: "Which item would you like to purchase?"
    },{
        name: "howMany",
        type: "input",
        message: "How many units would you like to buy?"

    })
      .then(function(answer) {
        var chosenItem;
            for (var i = 0; i < results.length; i++) {
            if (results[i].product_name === answer.whichItem) {
                chosenItem = results[i];
            }
            }
            if (chosenItem.stock_quantity >= parseInt(answer.howMany)) {
            connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                {
                    stock_quantity: stock_quantity - answer.howMany
                },
                {
                    id: chosenItem.id
                }
                ],
                function(error) {
                if (error) throw err;
                var totalCost = chosenItem.price * answer.howMany;
                console.log("Total cost: " + totalCost);
                start();
                }
            )
            }
            else {
            console.log("There aren't that many units of the selected product.");
            start();
            }
        })
    };