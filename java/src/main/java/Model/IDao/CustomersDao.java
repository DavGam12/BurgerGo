package Model.IDao;

import Model.Customers;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class CustomersDao implements IDao<Customers, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private int index = 1;
    private final String SQL_FIND_ALL = "select * from customers";
    private final String SQL_ADD = "insert into customers values";
    private final String SQL_MAX_ID = "select max(customer_id) from customers";
    private final String SQL_DELETE = "delete from customers where customer_id=";
    @Override
    public int add(Customers o)
    {
        int iRet = 0;

        try
        {
            motor.connect();

            int index = 0;
            ResultSet rs = motor.executeQuery(SQL_MAX_ID);
            while (rs.next()) {index = rs.getInt("max(customer_id)")+1;}

            String sql = SQL_ADD + "("+
                    index + ", '" +
                    o.getFirstName() + "', '" +
                    o.getLastName() + "', '" +
                    o.getEmail() + "', '" +
                    o.getPhoneNumber() + "', '" +
                    o.getPassword() + "')";

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

            String sql = SQL_DELETE+i;
            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
    }

    @Override
    public int update(Customers o) {
        return 0;
    }

    @Override
    public ArrayList<Customers> findAll(Customers o)
    {
        ArrayList<Customers> customers = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Customers customer = new Customers();
                customer.setCustomerID(rs.getString("customer_id"));
                customer.setFirstName(rs.getString("first_name"));
                customer.setLastName(rs.getString("last_name"));
                customer.setEmail(rs.getString("email"));
                customer.setPhoneNumber(rs.getString("phone_number"));
                customer.setPassword(rs.getString("password"));

                customers.add(customer);
            }
        }
        catch (Exception ex) {customers.clear();}
        finally {motor.disconnect();}

        return customers;
    }
}
