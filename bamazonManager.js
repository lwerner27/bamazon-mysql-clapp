const inquier = require("inquirer")
const mysql = require("mysql")

function showProducts() {

    console.clear()

    connection.query("SELECT * FROM products", function(err, data) {
        if (err) throw err

        for (let i = 0; i < data.length; i++) {
            let id = data[i].item_id
            let name = data[i].product_name
            let department = data[i].department_name
            let price = parseFloat(data[i].price)
            let stock = parseFloat(data[i].stock_quantity)
            let sales = parseFloat(data[i].product_sales)

            console.log(`ID: ${id} Name: ${name} Department: ${department} Price: ${price} Stock: ${stock} Sales: ${sales}`)
            console.log("")
        }

        connection.end()
        
    })

}

function showLowStock() {

    console.clear()

    console.log("These items are low on stock:")
    console.log("-----------------------------")
    console.log("")

    connection.query("SELECT * FROM products WHERE stock_quantity<5", function(err, data) {
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

        connection.end()
        
    })
}

function getItem(id, amountToAdd) {

    connection.query(`SELECT * FROM products WHERE item_id=${id}`, (err, res) => {

        let updatedAmount = parseInt(res[0].stock_quantity) + amountToAdd

        updateStock(updatedAmount, id)

    })

}

function addStock() {

    inquier.prompt([
        {
            type: "input",
            name: "itemID",
            message: "Enter the item ID: "
        },
        {
            type: "input",
            name: "quantity",
            message: "Enter the amount of stock to add: "
        }
    ]).then((res) => {

        let item_id = parseInt(res.itemID)
        let amountToAdd = parseInt(res.quantity)

        getItem(item_id, amountToAdd)

    })

}

function updateStock(updatedAmount, id) {

    connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: updatedAmount}, {item_id: id}], (err, res) => {

        if (err) throw err

        console.log("The stock has been updated.")

        connection.end()

    })

}

function addProduct() {

    inquier.prompt([
        {
            type: "input",
            name: "id",
            message: "Enter an ID for the item: "
        },
        {
            type: "input",
            name: "name",
            message: "Enter a name for this product: "
        },
        {
            type: "input",
            name: "department",
            message: "Enter the department for this item: "
        },
        {
            type: "input",
            name: "price",
            message: "Enter the price of the item: "
        },
        {
            type: "input",
            name: "stock",
            message: "Enter your current stock of the item: "
        }
    ]).then((res) => {

        let newID = res.id
        let newName = res.name
        let newDepartment = res.department
        let newPrice = res.price
        let newStock = res.stock
        let newSales = 0
        
        insertProduct(newID, newName, newDepartment, newPrice, newStock, newSales)

    })

}

function insertProduct(id, name, department, price, stock, sales) {

    let newProduct = {
        item_id: id,
        product_name: name,
        department_name: department,
        price: price,
        stock_quantity: stock,
        product_sales: sales
    }

    connection.query("INSERT INTO products SET ?", newProduct, (err, res) => 
    {
        if (err) throw err

        console.log("Item has been added to inventory.")

        connection.end()

    })

}


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

    inquier.prompt([
        {
            type: "list",
            name: "operation",
            choices: ["Show Inventory", "Show Low Inventory", "Add Stock", "Add Product", "Cancel"],
            message: "What would you like to do?"

        }
    ]).then((res) => {

        if(res.operation === "Show Inventory") {
            showProducts()
        } else if(res.operation === "Show Low Inventory") {
            showLowStock()
        } else if (res.operation === "Add Stock") {
            addStock()
        } else if (res.operation === "Add Product"){
            addProduct()
        } else if(res.operation === "Cancel") {
            console.log("Application quitting.")
            connection.end()
        }

    })

});