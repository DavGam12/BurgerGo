select table_name from user_tables;

/*
    allergens = gens
    allergies = gies
    products = prod
    sales_management = smanage
    sales = sal
    categories = cat
    details = det
    orders = ord
    customers = cust
    employees = em
    jobs = jb
*/

select * from allergens gens inner join allergies gies on gens.allergen_id = allergy_id inner join products prod on prod.product_id = gies.product_id inner join sales_management smanage on prod.product_id = smanage.product_id inner join sales sal on sal.sale_id = smanage.sale_id inner join categories cat on cat.category_id = prod.category_id inner join details det on prod.product_id = det.product_id inner join orders ord on ord.order_id = det.order_id inner join customers cust on cust.customer_id = ord.customer_id inner join employees em on em.employee_id = ord.employee_id inner join jobs jb on jb.job_id = em.job_id;

