package Model.IDao;

import Model.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductsDao implements IDao<Products, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from products where 1=1";
    private final String SQL_FIND_BURGERS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%burgers%' order by product_id";
    private final String SQL_FIND_KIDS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%kids%' order by product_id";
    private final String SQL_FIND_DESSERTS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%desserts%' order by product_id";
    private final String SQL_FIND_DRINKS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%drinks%' order by product_id";
    private final String SQL_FIND_OTHERS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%others%' order by product_id";
    private final String SQL_FIND_GLUTEN_FREE = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%gluten%free%' order by product_id";
    private final String SQL_ADD = "insert into products values";
    private final String SQL_DELETE = "delete from products where product_id=";
    private final String SQL_MAX_ID = "select max(product_id) from products";

    @Override
    public int add(Products o) {
        int res = 0;
        try {
            motor.connect();

            int index = 0;
            ResultSet rs = motor.executeQuery(SQL_MAX_ID);
            while (rs.next()) {index = rs.getInt("max(product_id)")+1;}

            String sql = SQL_ADD + "(" +
                    index + ", '" +
                    o.getProductName() + "', '" +
                    o.getProductImg() + "', " +
                    o.getProductPrice() + ", '" +
                    o.getProductDescription() + "', '" +
                    o.getCategoryID() + "')";

            res = motor.executeUpdate(sql);

        } catch (Exception ex)
        {
            res = 0;
        } finally {
            motor.disconnect();
        }
        return res;
    }

    @Override
    public int delete(Integer i) {
        int res = 0;
        try {
            motor.connect();

            String sql = SQL_DELETE + i;

            motor.executeQuery(sql);
            res = 1;
        } catch (Exception ex) {
            res = 0;
        } finally {
            motor.disconnect();
        }
        return res;
    }

    @Override
    public int update(Products o) {return 0;}

    @Override
    public ArrayList<Products> findAll(Products o) {
        ArrayList<Products> products = new ArrayList<>();
        try {
            motor.connect();
            // String sql = SQL_FIND_ALL;
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);


            while (rs.next()){
                Products product = new Products();
                product.setProductID(rs.getString("product_id".toUpperCase()));
                product.setProductName(rs.getString("product_name".toUpperCase()));
                product.setProductImg(rs.getString("product_img".toUpperCase()));
                product.setProductPrice(rs.getFloat("product_price".toUpperCase()));
                product.setProductDescription(rs.getString("product_description".toUpperCase()));
                product.setCategoryID(rs.getString("category_id".toUpperCase()));

                products.add(product);
            }
        } catch (SQLException sqlEx) {
            products.clear();
        } finally {
            motor.disconnect();
        }
        return products;
    }

    public ArrayList<Products> findAllByCategory(String category) {
        ArrayList<Products> products = new ArrayList<>();
        try {
            motor.connect();
            // String sql = SQL_FIND_BURGERS;
            ResultSet rs;
            switch (category.toLowerCase()) {
                case "burgers":
                    rs = motor.executeQuery(SQL_FIND_BURGERS);
                    break;
                case "kids":
                    rs = motor.executeQuery(SQL_FIND_KIDS);
                    break;
                case "desserts":
                    rs = motor.executeQuery(SQL_FIND_DESSERTS);
                    break;
                case "drinks":
                    rs = motor.executeQuery(SQL_FIND_DRINKS);
                    break;
                case "others":
                    rs = motor.executeQuery(SQL_FIND_OTHERS);
                    break;
                case "gluten-free":
                    rs = motor.executeQuery(SQL_FIND_GLUTEN_FREE);
                    break;
                default:
                    rs = motor.executeQuery(SQL_FIND_ALL);
            }


            while (rs.next()){
                Products product = new Products();
                product.setProductID(rs.getString("product_id".toUpperCase()));
                product.setProductName(rs.getString("product_name".toUpperCase()));
                product.setProductImg(rs.getString("product_img".toUpperCase()));
                product.setProductDescription(rs.getString("product_description".toUpperCase()));
                product.setProductPrice(rs.getFloat("product_price".toUpperCase()));
                product.setCategoryID(rs.getString("category_id".toUpperCase()));

                products.add(product);
            }
        } catch (SQLException sqlEx) {
            products.clear();
        } finally {
            motor.disconnect();
        }
        return products;
    }

}
