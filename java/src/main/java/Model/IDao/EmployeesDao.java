package Model.IDao;

import Model.SQLMotor;
import Model.Employees;

import java.sql.ResultSet;
import java.util.ArrayList;

public class EmployeesDao implements IDao<Employees, Integer> {

    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select employee_id, first_name, last_name, email, ss_number, birth_date, hire_date, salary, permission, password, job_id from employees order by employee_id";
    private final String SQL_ADD = "insert into employees values";
    private final String SQL_DELETE = "delete from employees where employee_id=";
    private final String SQL_UPDATE = "update employees set ";
    @Override
    public int add(Employees o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_ADD + "( " +
                    o.getEmployeeID() + ", '" +
                    o.getFirstName() + "', '" +
                    o.getLastName() + "', '" +
                    o.getEmail() + "', '" +
                    o.getSsNumber() + "', '" +
                    o.getBirthDate() + "', '" +
                    o.getHireDate() + "', " +
                    o.getSalary() + ", " +
                    o.getPermission() + ", '" +
                    o.getPassword() + "', " +
                    o.getJobID() + ")";

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
    public int update(Employees o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_UPDATE + "employee_id=" +
                    o.getEmployeeID() + ", first_name='" +
                    o.getFirstName() + "', last_name='" +
                    o.getLastName() + "', email='" +
                    o.getEmail() + "', ss_number='" +
                    o.getSsNumber() + "', birth_date='" +
                    o.getBirthDate() + "', hire_date='" +
                    o.getHireDate() + "', salary=" +
                    o.getSalary() + ", permission=" +
                    o.getPermission() + ", password='" +
                    o.getPassword() + "', job_id=" +
                    o.getJobID() + " where employee_id=" + o.getCurrentEmployeeID();

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}
        return iRet;
    }

    @Override
    public ArrayList<Employees> findAll(Employees o) {
        ArrayList<Employees> employees = new ArrayList<>();
        try {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Employees employee = new Employees();
                employee.setEmployeeID(rs.getInt("employee_id".toUpperCase()));
                employee.setFirstName(rs.getString("first_name".toUpperCase()));
                employee.setLastName(rs.getString("last_name".toUpperCase()));
                employee.setEmail(rs.getString("email".toUpperCase()));
                employee.setSsNumber(rs.getString("ss_number".toUpperCase()));
                employee.setBirthDate(rs.getString("birth_date".toUpperCase()));
                employee.setHireDate(rs.getString("hire_date".toUpperCase()));
                employee.setSalary(rs.getFloat("salary".toUpperCase()));
                employee.setPermission(rs.getInt("permission".toUpperCase()));
                employee.setPassword(rs.getString("password".toUpperCase()));
                employee.setJobID(rs.getInt("job_id".toUpperCase()));

                employees.add(employee);
            }
        } catch (Exception ex) {
            employees.clear();
        } finally {
            motor.disconnect();
        }
        return employees;
    }
}
