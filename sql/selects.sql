select * from allergens order by allergen_id; -- ALLERGENS DAO FIND ALL SELECT
select * from allergies order by allergy_id; -- ALLERGIES DAO FIND ALL SELECT
select * from categories order by category_id; -- CATEGORIES DAO FIND ALL SELECT
select * from customers order by customer_id; -- CUSTOMERS DAO FIND ALL SELECT
select * from details order by detail_id; -- DETAILS DAO FIND ALL SELECT
select * from details where product_id=(product_id); -- DETAILS DAO FIND SPECIFIC SELECT
select * from employees order by employee_id; -- EMPLOYEES DAO FIND ALL SELECT
select * from jobs order by job_id; -- JOBS DAO FIND ALL SELECT
select * from orders order by order_id; -- ORDERS DAO FIND ALL SELECT
select * from orders where order_state=(order_state) and customer_id=(customer_id); -- ORDERS DAO FIND SPECIFIC SELECT
select * from products order by product_id; -- PRODUCTS DAO FIND ALL SELECT
select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%burgers%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM BURGERS CATEGORY SELECT
select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%kids%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM KIDS CATEGORY SELECT
select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%desserts%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM DESSERTS CATEGORY SELECT
select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%drinks%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM DRINKS CATEGORY SELECT
select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%others%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM OTHERS CATEGORY SELECT
select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%gluten%free%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM GLUTEN FREE CATEGORY SELECT
