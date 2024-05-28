package Model.IDao;

import Model.Categories;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class CategoriesDao implements IDao<Categories, Integer>{
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select category_id, category_name from categories order by category_id";
    private final String SQL_ADD = "insert into categories values";
    private final String SQL_DELETE = "delete from categories where category_id=";
    private final String SQL_UPDATE = "update categories set ";
    @Override
    public int add(Categories o) {
        int iRes = 0;

        try
        {
            motor.connect();

            String sql = SQL_ADD + "(" +
                    o.getCategoryID() + ", '" +
                    o.getCategoryName() + "')";
            iRes = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRes = 1;}
        finally {motor.disconnect();}
        return iRes;
    }

    @Override
    public int delete(Integer i) {
        int iRes = 0;

        try
        {
            motor.connect();
            iRes = motor.executeUpdate(SQL_DELETE+i);
        }
        catch (Exception ex) {iRes = 0;}
        finally {motor.disconnect();}
        return iRes;
    }

    @Override
    public int update(Categories o) {
        int iRes = 0;

        try
        {
            motor.connect();

            String sql = SQL_UPDATE + "category_id=" +
                    o.getCategoryID() + ", category_name='" +
                    o.getCategoryName() + "' where category_id="+o.getCurrentCategoryID();
            iRes = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRes = 1;}
        finally {motor.disconnect();}
        return iRes;
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
                category.setCategoryID(rs.getInt("category_id"));
                category.setCategoryName(rs.getString("category_name"));

                categories.add(category);
            }
        } catch (Exception ex) {categories.clear();}
        finally {motor.disconnect();}

        return categories;
    }
}
