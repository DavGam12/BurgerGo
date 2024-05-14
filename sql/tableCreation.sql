create table customers(customer_id varchar2(6) primary key, first_name varchar2(40), last_name varchar2(60), email varchar2(50), phone_number varchar2(13), password varchar2(20));

create table jobs(job_id varchar2(2) primary key, job_name varchar2(40));

create table employees(employee_id varchar2(3) primary key, first_name varchar2(40), last_name varchar2(60), ss_number varchar2(12), birth_date date, hire_date date, salary number(6,2), permission number(1,0), password varchar2(40), job_id varchar2(2), foreign key(job_id) references jobs(job_id));

create table orders(order_id varchar2(10) primary key, order_state varchar2(40), direction varchar2(100), order_price number(6,2), order_date date, employee_id varchar2(3), foreign key(employee_id) references employees(employee_id), customer_id varchar2(6), foreign key(customer_id) references customers(customer_id));


create table allergens(allergen_id varchar2(2) primary key, allergen_name varchar2(30), allergen_imd varchar2(100));

create table sales(sale_id varchar2(4) primary key, sale_name varchar2(60), sale_disscount number(2,0));

create table categories(category_id varchar2(2) primary key, category_name varchar2(40));

create table products(product_id varchar2(4) primary key, product_name varchar2(60), product_img varchar2(100), product_price number(4,2), product_description varchar2(200), category_id varchar2(2), foreign key(category_id) references categories(category_id));

create table allergies(allergy_id varchar2(5), allergen_id varchar2(2), foreign key(allergen_id) references allergens(allergen_id), product_id varchar2(4), foreign key(product_id) references products(product_id));

create table sales_management(sales_management_id varchar2(8) primary key, start_date date, end_date date, sale_id varchar2(4), foreign key(sale_id) references sales(sale_id), product_id varchar2(4), foreign key(product_id) references products(product_id));

create table details(detail_id varchar2(12) primary key, product_quantity number(2,0), detail_price number(6,2), order_id varchar2(10), foreign key(order_id) references orders(order_id), product_id varchar2(4), foreign key(product_id) references products(product_id));
