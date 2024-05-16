package Model.IDao;

import Model.Products;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductsDao implements IDao {
    private final String SQL_FIND_ALL = "select * from products where 1=1";
    private final String SQL_FIND_BURGERS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%burgers%' order by product_id";
    private final String SQL_FIND_KIDS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%kids%' order by product_id";
    private final String SQL_FIND_DESSERTS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%desserts%' order by product_id";
    private final String SQL_FIND_DRINKS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%drinks%' order by product_id";
    private final String SQL_FIND_OTHERS = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%others%' order by product_id";
    private final String SQL_FIND_GLUTEN_FREE = "select * from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%gluten%free%' order by product_id";
    @Override
    public int add(Object o) {return 0;}

    @Override
    public int delete(Integer e) {return 0;}

    @Override
    public int update(Object o) {return 0;}

    @Override
    public ArrayList<Products> findAll(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_ALL;
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);


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

    public ArrayList<Products> findBurgers(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_BURGERS;
            ResultSet rs = motor.executeQuery(SQL_FIND_BURGERS);


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

    public ArrayList<Products> findKids(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_KIDS;
            ResultSet rs = motor.executeQuery(SQL_FIND_KIDS);


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

    public ArrayList<Products> findDesserts(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_DESSERTS;
            ResultSet rs = motor.executeQuery(SQL_FIND_DESSERTS);


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

    public ArrayList<Products> findDrinks(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_DRINKS;
            ResultSet rs = motor.executeQuery(SQL_FIND_DRINKS);


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

    public ArrayList<Products> findOthers(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_OTHERS;
            ResultSet rs = motor.executeQuery(SQL_FIND_OTHERS);


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

    public ArrayList<Products> findGlutenFree(Object o) {
        ArrayList<Products> products = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            // String sql = SQL_FIND_GLUTEN_FREE;
            ResultSet rs = motor.executeQuery(SQL_FIND_GLUTEN_FREE);


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
