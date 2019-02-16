create database bamazon;

use bamazon;

create table products (
item_id int auto_increment,
product_name varchar(100) not null,
department_name varchar(50) not null,
price int(10) not null,
stock_quantity int(10) not null,
primary key(item_id)
);

INSERT INTO products 
(product_name, department_name, price, stock_quantity) 
values  
('dog bone', 'pet supplies', 14, 10),
('pet food bowl', 'pet supplies', 10, 103), 
('tv', 'electronics', 1099, 74),
('gps', 'electronics', 45, 134),
('lego starwars set', 'toys', 34, 24),  
('razor scooter', 'toys', 100, 201),
('xbox one', 'toys', 300, 23),
('stapler', 'office supplies', 15, 3),
('printer', 'office supplies', 75, 24),
('pens 20ct', 'office supplies', 5, 53);