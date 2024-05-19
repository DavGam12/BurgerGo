package Model.IDao;

import Model.SQLMotor;
import Model.Sales;

import java.sql.ResultSet;
import java.util.ArrayList;

public class SalesDao implements IDao<Sales, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String  SQL_FIND_ALL = "select * from sales";
    @Override
    public int add(Sales o) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Sales o) {
        return 0;
    }

    @Override
    public ArrayList<Sales> findAll(Sales o) {
        ArrayList<Sales> sales = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Sales sale = new Sales();
                sale.setSaleID(rs.getString("sale_id"));
                sale.setSaleName(rs.getString("sale_name"));
                sale.setSaleDisscount(rs.getInt("sale_disscount"));

                sales.add(sale);
            }
        }
        catch (Exception ex) {sales.clear();}
        finally {motor.disconnect();}

        return sales;
    }
}
