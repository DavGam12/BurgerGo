package Model.IDao;

import Model.Allergens;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergensDao implements IDao<Allergens, Integer>{
    private final String SQL_FIND_ALL = "select * from allergens where 1=1";
    @Override
    public int add(Allergens o) {
        return 0;
    }

    @Override
    public int delete(Integer e) {
        return 0;
    }

    @Override
    public int update(Allergens o) {
        return 0;
    }

    @Override
    public ArrayList<Allergens> findAll(Allergens o) {
        ArrayList<Allergens> allergens = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Allergens allergen = new Allergens();
                allergen.setAllergenID(rs.getString("allergen_id".toUpperCase()));
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
