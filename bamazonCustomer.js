const inquirer = require("inquirer")
const mysql = require("mysql")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Hastings!27",
    database: "bamazon"
});
  
connection.connect(function(err) {
    if (err) throw err;

    connection.query("SELECT * FROM products", function(err, data) {
        if (err) throw err

        setupApp()

    })

});

function setupApp() {
    console.clear()
    connection.query("SELECT * FROM products", function(err, data) {
        if (err) throw err

        for (let i = 0; i < data.length; i++) {
            let id = data[i].item_id
            let name = data[i].product_name
            let department = data[i].department_name
            let price = parseFloat(data[i].price)
            let stock = parseFloat(data[i].stock_quantity)

            console.log(`ID: ${id} Name: ${name} Department: ${department} Price: ${price} Stock: ${stock}`)
            console.log("")
        }
        
    })
}

function initialPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please enter the ID of the item you would like to buy."
        },
        {
            type: "input",
            name: "quantity",
            message: "How many would you like to buy?"
        }
    ]).then((res) => {

        connection.query(`SELECT * FROM products WHERE item_id=${res.item_id}`, (err, response) => {
            if (err) throw err 

            let newQuantity = parseInt(response[0].stock_quantity) - parseInt(res.quantity)
            let price = parseFloat(response[0].price)
            let total = price * parseInt(res.quantity)


            if (parseInt(response[0].stock_quantity) < parseInt(res.quantity)) {
                console.log("Sorry we do not have enough in stock to fulfill that order, try again at another time.")
                connection.end()
            } else {
                updateStock(newQuantity, res.item_id)
                console.log(`Your total is: ${total}`)
            }
                
        })
    })
}

function updateStock(updatedAmount, id) {

    connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: updatedAmount}, {item_id: id}], (err, res) => {
        if (err) throw err
        connection.end()
    })
}

