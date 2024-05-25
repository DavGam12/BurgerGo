package Model.IDao;

import Model.Allergens;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergensDao implements IDao<Allergens, Integer>{
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from allergens order by allergen_id";
    private final String SQL_ADD = "insert into allergens values";
    private final String SQL_DELETE = "delete from allergens where allergen_id=";
    private final String SQL_UPDATE = "update allergens set ";
    @Override
    public int add(Allergens o) {
        int iRet = 0;
        try
        {
            motor.connect();
            String sql = SQL_ADD + "(" +
                    o.getAllergenID() + ", '" +
                    o.getAllergenName() + "', '" +
                    o.getAllergenImg() + "')";
            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}
        return iRet;
    }

    @Override
    public int delete(Integer i) {
        int iRet = 0;
        try
        {
            motor.connect();

            iRet = motor.executeUpdate(SQL_DELETE+i);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}
        return iRet;
    }

    @Override
    public int update(Allergens o) {
        int iRet = 0;
        try
        {
            motor.connect();
            String sql = SQL_UPDATE + "allergen_id=" +
                    o.getAllergenID() + ", allergen_name='" +
                    o.getAllergenName() + "', allergen_img='" +
                    o.getAllergenImg() + "' where allergen_id=" + o.getCurrentAllergenID();
            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}
        return iRet;
    }

    @Override
    public ArrayList<Allergens> findAll(Allergens o) {
        ArrayList<Allergens> allergens = new ArrayList<>();
        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Allergens allergen = new Allergens();
                allergen.setAllergenID(rs.getInt("allergen_id".toUpperCase()));
                allergen.setAllergenName(rs.getString("allergen_name".toUpperCase()));
                allergen.setAllergenImg(rs.getString("allergen_img".toUpperCase()));

                allergens.add(allergen);
            }
        } catch (Exception ex) {
            allergens.clear();
        } finally {
            motor.disconnect();
        }
        return allergens;
    }
}
