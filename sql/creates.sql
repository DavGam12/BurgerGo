create sequence customer_id start with 1 increment by 1 nocache;
create sequence order_id start with 1 increment by 1 nocache;
create sequence detail_id start with 1 increment by 1 nocache;


create table customers(customer_id number(8) primary key, first_name varchar2(40) not null, last_name varchar2(60), email varchar2(50) unique not null, phone_number varchar2(13) not null, password varchar2(40) not null);

create table jobs(job_id number(2) primary key, job_name varchar2(40) not null);

create table employees(employee_id number(3) primary key, first_name varchar2(40) not null, last_name varchar2(60) not null, email varchar2(50) unique not null, ss_number varchar2(12) not null, birth_date varchar2(12) not null, hire_date varchar2(12) not null, salary number(6,2) not null, permission number(1,0) not null, password varchar2(40) not null, job_id number(2), foreign key(job_id) references jobs(job_id));

create table orders(order_id number(10) primary key, order_state varchar2(40) not null, direction varchar2(100) not null, order_price number(6,2) not null, order_date varchar2(12) not null, employee_id number(3), foreign key(employee_id) references employees(employee_id), customer_id number(6), foreign key(customer_id) references customers(customer_id));

create table allergens(allergen_id number(2) primary key, allergen_name varchar2(30) not null, allergen_img varchar2(100) not null);

create table categories(category_id number(2) primary key, category_name varchar2(40) not null);

create table products(product_id number(4) primary key, product_name varchar2(60) not null, product_img varchar2(100) not null, product_price number(4,2) not null, product_description varchar2(200) not null, category_id number(2), foreign key(category_id) references categories(category_id));

create table allergies(allergy_id number(5) primary key, allergen_id number(2), foreign key(allergen_id) references allergens(allergen_id), product_id number(4), foreign key(product_id) references products(product_id));

create table details(detail_id number(12) primary key, product_quantity number(2,0) not null, detail_price number(6,2) not null, order_id number(10), foreign key(order_id) references orders(order_id), product_id number(4), foreign key(product_id) references products(product_id));
