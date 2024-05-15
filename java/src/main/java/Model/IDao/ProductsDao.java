package Model.IDao;

import Model.Products;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class ProductsDao implements IDao {
    private final String SQL_FIND_ALL = "select * from products where 1=1";
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
            String sql = SQL_FIND_ALL;
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);


            while (rs.next())
            {
                Products product = new Products();
                product.setProductID(rs.getString("product_id".toUpperCase()));
                product.setProductName(rs.getString("product_name".toUpperCase()));
                product.setProductImg(rs.getString("product_img".toUpperCase()));
                product.setProductDescription(rs.getString("product_description".toUpperCase()));
                product.setProductPrice(rs.getFloat("product_price".toUpperCase()));
                product.setCategoryID(rs.getString("category_id".toUpperCase()));

                products.add(product);
            }
        } catch (Exception ex) {
            products.clear();
        } finally {
            motor.disconnect();
        }
        return products;
    }
}