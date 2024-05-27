select allergen_id, allergen_name, allergern_img from allergens order by allergen_id; -- ALLERGENS DAO FIND ALL SELECT
select allergy_id, allergen_id, product_id from allergies order by allergy_id; -- ALLERGIES DAO FIND ALL SELECT
select category_id, category_name from categories order by category_id; -- CATEGORIES DAO FIND ALL SELECT
select customer_id, first_name, last_name, email, phone_number, password from customers order by customer_id; -- CUSTOMERS DAO FIND ALL SELECT
select detail_id, product_quantity, detail_price, order_id, product_id from details order by detail_id; -- DETAILS DAO FIND ALL SELECT
select detail_id, product_quantity, detail_price, order_id, product_id from details where product_id=(product_id); -- DETAILS DAO FIND SPECIFIC SELECT
select detail_id, product_quantity, detail_price, order_id from details where order_id=(order_id); -- DETAILS DAO FIND SPECIFIC ORDER SELECT
select employee_id, first_name, last_name, email, ss_number, birth_date, hire_date, salary, permission, password, job_id from employees order by employee_id; -- EMPLOYEES DAO FIND ALL SELECT
select job_id, job_name from jobs order by job_id; -- JOBS DAO FIND ALL SELECT
select order_id, order_state, direction, order_price, order_date, customer_id from orders order by order_id; -- ORDERS DAO FIND ALL SELECT
select order_id, order_state, direction, order_price, order_date, customer_id from orders where order_state=(order_state) and customer_id=(customer_id); -- ORDERS DAO FIND SPECIFIC SELECT
select product_id, product_name, product_img, product_price, product_description, category_id from products order by product_id; -- PRODUCTS DAO FIND ALL SELECT
select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%burgers%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM BURGERS CATEGORY SELECT
select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%kids%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM KIDS CATEGORY SELECT
select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%desserts%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM DESSERTS CATEGORY SELECT
select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%drinks%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM DRINKS CATEGORY SELECT
select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%others%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM OTHERS CATEGORY SELECT
select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%gluten%free%' order by product_id; -- PRODUCTS DAO FIND ALL PRODUCTS FROM GLUTEN FREE CATEGORY SELECT
select product_id, product_name, product_img, product_price, product_description from products where product_id=(product_id); -- PRODUCTS DAO FIND SPECIFIC SELECT
