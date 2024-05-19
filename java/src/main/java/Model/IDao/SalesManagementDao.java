package Model.IDao;

import Model.SQLMotor;
import Model.Sales_Management;

import java.sql.ResultSet;
import java.util.ArrayList;

public class SalesManagementDao implements IDao<Sales_Management, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String  SQL_FIND_ALL = "select * from sales_management";
    @Override
    public int add(Sales_Management o) {
        return 0;
    }

    @Override
    public int delete(Integer i) {
        return 0;
    }

    @Override
    public int update(Sales_Management o) {
        return 0;
    }

    @Override
    public ArrayList<Sales_Management> findAll(Sales_Management o)
    {
        ArrayList<Sales_Management> salesManagements = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Sales_Management salesManagement = new Sales_Management();
                salesManagement.setSalesManagementID(rs.getString("sales_management_id"));
                salesManagement.setStartDate(rs.getDate("start_date"));
                salesManagement.setEndDate(rs.getDate("end_date"));
                salesManagement.setSaleID(rs.getString("sale_id"));
                salesManagement.setProductID(rs.getString("product_id"));

                salesManagements.add(salesManagement);
            }
        }
        catch (Exception ex) {salesManagements.clear();}
        finally {motor.disconnect();}

        return salesManagements;
    }
}
