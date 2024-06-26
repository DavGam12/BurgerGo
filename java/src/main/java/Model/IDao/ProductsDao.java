package Model.IDao;

import Model.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductsDao implements IDao<Products, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select product_id, product_name, product_img, product_price, product_description, category_id from products order by product_id";
    private final String SQL_FIND_BURGERS = "select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%burgers%' order by product_id";
    private final String SQL_FIND_KIDS = "select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%kids%' order by product_id";
    private final String SQL_FIND_DESSERTS = "select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%desserts%' order by product_id";
    private final String SQL_FIND_DRINKS = "select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%drinks%' order by product_id";
    private final String SQL_FIND_OTHERS = "select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%others%' order by product_id";
    private final String SQL_FIND_GLUTEN_FREE = "select product_id, product_name, product_img, product_price, product_description, category_name from products prod inner join categories cat on prod.category_id = cat.category_id where 1=1 and lower(category_name) like '%gluten%free%' order by product_id";
    private final String SQL_FIND_SPECIFIC = "select product_id, product_name, product_img, product_price, product_description from products where product_id=";
    private final String SQL_ADD = "insert into products values";
    private final String SQL_DELETE = "delete from products where product_id=";
    private final String SQL_UPDATE = "update products set ";

    @Override
    public int add(Products o) {
        int res = 0;
        try {
            motor.connect();

            String sql = SQL_ADD + "(" +
                    o.getProductID() + ", '" +
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
    public int update(Products o) {
        int res = 0;
        try {
            motor.connect();

            String sql = SQL_UPDATE + "product_id=" +
                    o.getProductID() + ", product_name='" +
                    o.getProductName() + "', product_img='" +
                    o.getProductImg() + "', product_price=" +
                    o.getProductPrice() + ", product_description='" +
                    o.getProductDescription() + "', category_id='" +
                    o.getCategoryID() + "' where product_id=" + o.getCurrentProductID();

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
    public ArrayList<Products> findAll(Products o) {
        ArrayList<Products> products = new ArrayList<>();
        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Products product = new Products();
                product.setProductID(rs.getInt("product_id"));
                product.setProductName(rs.getString("product_name"));
                product.setProductImg(rs.getString("product_img"));
                product.setProductPrice(rs.getFloat("product_price"));
                product.setProductDescription(rs.getString("product_description"));
                product.setCategoryID(rs.getInt("category_id"));

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
                product.setProductID(rs.getInt("product_id".toUpperCase()));
                product.setProductName(rs.getString("product_name".toUpperCase()));
                product.setProductImg(rs.getString("product_img".toUpperCase()));
                product.setProductDescription(rs.getString("product_description".toUpperCase()));
                product.setProductPrice(rs.getFloat("product_price".toUpperCase()));

                products.add(product);
            }
        } catch (SQLException sqlEx) {
            products.clear();
        } finally {
            motor.disconnect();
        }
        return products;
    }

    public Products findSpecific(int id) {
        Products product = new Products();
        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_SPECIFIC+id);

            while (rs.next())
            {
                product.setProductID(rs.getInt("product_id".toUpperCase()));
                product.setProductName(rs.getString("product_name".toUpperCase()));
                product.setProductImg(rs.getString("product_img".toUpperCase()));
                product.setProductPrice(rs.getFloat("product_price".toUpperCase()));
                product.setProductDescription(rs.getString("product_description".toUpperCase()));
            }
        } catch (SQLException sqlEx) {product = null;}
        finally {motor.disconnect();}
        return product;
    }

}
