package Model.IDao;

import Model.Customers;
import Model.Employees;
import Model.SQLMotor;

import javax.security.auth.login.LoginException;
import java.sql.ResultSet;
import java.util.ArrayList;

public class CustomersDao implements IDao<Customers, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from customers order by customer_id";
    private final String SQL_ADD = "insert into customers (first_name, last_name, email, phone_number, password) values";
    private final String SQL_UPDATE = "update customer set ";
    private final String SQL_DELETE = "delete from customers where customer_id=";

    @Override
    public int add(Customers o)
    {
        int iRet = 0;

        try
        {
            motor.connect();

            String sql = SQL_ADD + "('" +
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
        int iRet = 0;

        try
        {
            motor.connect();

            String sql = SQL_UPDATE + "customer_id="+
                    o.getCustomerID() + ", first_name='" +
                    o.getFirstName() + "', last_name='" +
                    o.getLastName() + "', email='" +
                    o.getEmail() + "', phone_number='" +
                    o.getPhoneNumber() + "', password='" +
                    o.getPassword() + "' where customer_id=" + o.getCurrentCustomerID();

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
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
                customer.setCustomerID(rs.getInt("customer_id"));
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

    public String login (String email, String password)
    {
        String iRet = "0";
        try
        {
            ArrayList<Customers> customers = findAll(null);
            ArrayList<Employees> employees = new EmployeesDao().findAll(null);

            for (int i = 0; i<customers.size() && iRet.equals("0"); i++)
            {
                if (customers.get(i).getPassword().equals(password) && customers.get(i).getEmail().equals(email))
                {
                    iRet = "1";
                }
            }

            for (int i = 0; i<employees.size() && iRet.equals("0"); i++)
            {
                if (employees.get(i).getPassword().equals(password) && employees.get(i).getEmail().equals(email))
                {
                    iRet = "2";
                }
            }

        }
        catch (Exception ex) {iRet = "0";}

        return iRet;
    }
}
