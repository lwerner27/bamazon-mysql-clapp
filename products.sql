USE bamazon;

CREATE TABLE products (
    item_id INTEGER(10) NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    product_sales DECIMAL(10,2) NOT NULL
);

-- Item 1
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0001", "Sous Vide Precision Cooker", "kitchen", 129.99, 10, 0.00);

-- Item 2
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0010", "Asus Z170-A Motherboard", "computers", 322.43, 3, 0.00);

-- Item 3
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0011", "28-Volt Cordless Lawn Mower", "lawn and garden", 142.70, 6, 0.00);

-- Item 4
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0100", "The Catcher in the Rye", "books", 8.99, 5, 0.00);

-- Item 5
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0101", "Monopoly", "board games", 19.99, 7, 0.00);

-- Item 6
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0110", "Goose Feather Pillow", "home", 25.99, 8, 0.00);

-- Item 7
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("0111", "Socket Set", "hardware", 46.99, 2, 0.00);

-- Item 8
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("1000", "LG 49 Inch 4K TV", "electronics", 449.99, 1, 0.00);

-- Item 9
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("1001", "50 foot Garden Hose", "lawn and garden", 29.99, 9, 0.00);

-- Item 10
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity, product_sales)
VALUES ("1010", "Chef's Knife", "kitchen", 29.99, 4, 0.00);
