USE bamazon;

CREATE TABLE departments(
    department_id INTEGER(10) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    overhead_cost DECIMAL(10,2) NOT NULL
);

-- Kitchen Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (01, "kitchen", 500.00);

-- Computers Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (02, "computers", 500.00);

-- Lawn and Garden Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (03, "lawn and garden", 500.00);

-- Books Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (04, "books", 250.00);

-- Board Games Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (05, "board games", 250.00);

-- Home Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (06, "home", 250.00);

-- Hardware Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (07, "hardware", 250.00);

-- Electronics Insert
INSERT INTO departments (department_id, department_name, overhead_cost)
VALUES (08, "electronics", 500.00);

