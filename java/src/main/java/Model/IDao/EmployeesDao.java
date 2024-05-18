package Model.IDao;

import Model.SQLMotor;
import Model.Employees;

import java.sql.ResultSet;
import java.util.ArrayList;

public class EmployeesDao implements IDao<Employees, Integer> {

    private final String SQL_FIND_ALL = "select * from employees where 1=1";
    @Override
    public int add(Employees o) {return 0;}

    @Override
    public int delete(Integer e) {return 0;}

    @Override
    public int update(Employees o) {return 0;}

    @Override
    public ArrayList<Employees> findAll(Employees o) {
        ArrayList<Employees> employees = new ArrayList<>();
        SQLMotor motor = new SQLMotor();
        try {
            motor.connect();
            String sql = SQL_FIND_ALL;
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);
            /*
            if (element != null) {
                if (((Film)element).getId() != 0) {
                    sql += " and id='" + ((Film)element).getId() + "'";
                }
            }*/

            while (rs.next())
            {
                Employees employee = new Employees();
                employee.setEmployeeID(rs.getString("employee_id".toUpperCase()));
                employee.setFirstName(rs.getString("first_name".toUpperCase()));
                employee.setLastName(rs.getString("last_name".toUpperCase()));
                employee.setSsNumber(rs.getString("ss_number".toUpperCase()));
                employee.setBirthDate(rs.getDate("birth_date".toUpperCase()));
                employee.setHireDate(rs.getDate("hire_date".toUpperCase()));
                employee.setSalary(rs.getFloat("salary".toUpperCase()));
                employee.setPermission(rs.getInt("permission".toUpperCase()));
                employee.setPassword(rs.getString("password".toUpperCase()));
                employee.setJobID(rs.getString("job_id".toUpperCase()));

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
