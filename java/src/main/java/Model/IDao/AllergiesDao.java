package Model.IDao;

import Model.Allergies;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class AllergiesDao implements IDao<Allergies, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from allergies order by allergy_id";
    private final String SQL_ADD = "insert into allergies values";
    private String SQL_AUTOMATION (String allergy_id, String allergen_id, String product_id)
    {
        return SQL_ADD + "('" + allergy_id + "', '" + allergen_id + "', '" + product_id + "')";
    }

    @Override
    public int add(Allergies allergies) {
        return 0;
    }

    @Override
    public int delete(Integer e) {
        return 0;
    }
    private int deleteAll () {
        int res = 0;
        try {
            motor.connect();

            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            String[] str = new String[1000];
            for (int i = 0; rs.next(); i++)
            {
                str[i] = rs.getString("allergy_id");
            }

            for (int i = 0; str[i] != null; i++)
            {
                motor.executeQuery("delete from allergies where allergy_id="+str[i]);
            }
            res = 1;
        } catch (Exception ex) {
            res = 0;
        } finally {
            motor.disconnect();
        }
        return res;
    }

    @Override
    public int update(Allergies allergies) {
        return 0;
    }

    @Override
    public ArrayList<Allergies> findAll(Allergies o) {
        ArrayList<Allergies> allergies = new ArrayList<>();
        try {
            motor.connect();

            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Allergies allergy = new Allergies();
                allergy.setAllergyID(rs.getInt("allergy_id".toUpperCase()));
                allergy.setAllergenID(rs.getInt("allergen_id".toUpperCase()));
                allergy.setProductID(rs.getInt("product_id".toUpperCase()));

                allergies.add(allergy);
            }
        } catch (Exception ex) {
            allergies.clear();
        } finally {
            motor.disconnect();
        }
        return allergies;
    }

    public int reset () {
        deleteAll();
        int res = 0;
        try {
            int currentId = 0;
            motor.connect();

            ResultSet rsProducts = motor.executeQuery("select * from products order by product_id");


            String[][] strTest = new String[6][1000];
            for (int i = 0; rsProducts.next(); i++)
            {
                strTest[0][i] = rsProducts.getString("product_id");
                strTest[1][i] = rsProducts.getString("product_name");
                strTest[2][i] = rsProducts.getString("product_img");
                strTest[3][i] = rsProducts.getString("product_price");
                strTest[4][i] = rsProducts.getString("product_description");
                strTest[5][i] = rsProducts.getString("category_id");
            }


            int i = 0;
            while (strTest[0][i] != null){
                /* GLUTEN IF */
                if (!strTest[5][i].equals("6") && !strTest[5][i].equals("3") && !(strTest[5][i].equals("4") && strTest[1][i].equalsIgnoreCase("sliced apple")) && !(strTest[5][i].equals("5") && !strTest[1][i].toLowerCase().contains("chicken"))) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "1", strTest[0][i]));
                }
                /* MUSTARD IF */
                if (!(strTest[5][i].equals("5") && !strTest[1][i].equalsIgnoreCase("barbecue")) && !strTest[5][i].equals("4") && !strTest[5][i].equals("3") && !(strTest[5][i].equals("2") && !strTest[1][i].toLowerCase().contains("burger"))) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "13", strTest[0][i]));
                }
                /* SESAME SEEDS IF */
                if (!strTest[5][i].equals("2") && !strTest[5][i].equals("3") && !strTest[5][i].equals("4") && !strTest[5][i].equals("5")) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "12", strTest[0][i]));
                }
                /* DAIRY IF */
                if (!strTest[5][i].equals("3") && !(strTest[5][i].equals("2") && strTest[1][i].toLowerCase().contains("nuggies")) && !(strTest[5][i].equals("4") && strTest[1][i].toLowerCase().contains("apple")) && !(strTest[5][i].equals("5") && !(strTest[1][i].equalsIgnoreCase("mayonnaise") || strTest[1][i].equalsIgnoreCase("ranch")))) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "6", strTest[0][i]));
                }
                /* SOYBEAN IF */
                if (strTest[1][i].toLowerCase().contains("bbq")) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "7", strTest[0][i]));
                }
                /* EGGS IF */
                if (strTest[1][i].equalsIgnoreCase("mayonnaise") || strTest[1][i].equalsIgnoreCase("ranch")) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "2", strTest[0][i]));
                }
                /* CELERY IF */
                if (strTest[1][i].toLowerCase().contains("fried chicken") || (strTest[5][i].equals("5") && strTest[1][i].toLowerCase().contains("chicken"))) {
                    currentId++;
                    motor.executeQuery(SQL_AUTOMATION(String.valueOf(currentId), "9", strTest[0][i]));
                }

                i++;
            }

            res = 1;
        } catch (Exception ex) {
            res = 0;
        } finally {
            motor.disconnect();
        }
        return res;
    }
}
