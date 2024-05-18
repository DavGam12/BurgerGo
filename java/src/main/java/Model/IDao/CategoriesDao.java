package Model.IDao;

import Model.Categories;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class CategoriesDao implements IDao<Categories, Integer>{
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from categories";
    @Override
    public int add(Categories o) {
        return 0;
    }

    @Override
    public int delete(Integer e) {
        return 0;
    }

    @Override
    public int update(Categories o) {
        return 0;
    }

    @Override
    public ArrayList<Categories> findAll(Categories o) {
        ArrayList<Categories> categories = new ArrayList<>();
        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Categories category = new Categories();
                category.setCategoryID(rs.getString("category_id"));
                category.setCategoryName(rs.getString("category_name"));

                categories.add(category);
            }
        } catch (Exception ex) {categories.clear();}
        finally {motor.disconnect();}

        return categories;
    }
}
