package Controller.IAction;

import Model.Employees;
import Model.IDao.EmployeesDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class EmployeesAction implements IAction{
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();
        String strReturn = "";

        switch (act)
        {
            case "find_all":
            {
                strReturn = findAll();
                break;
            }
            case "add":
            {
                Employees employee = gson.fromJson(parser.parse(getBody(req)), Employees.class);
                strReturn = add(employee);
                break;
            }
            case "delete":
            {
                Employees employee = gson.fromJson(parser.parse(getBody(req)), Employees.class);
                strReturn = delete(employee.getEmployeeID());
                break;
            }
            case "update":
            {
                Employees employee = gson.fromJson(parser.parse(getBody(req)), Employees.class);
                strReturn = update(employee);
                break;
            }
            default:
                strReturn = "ERROR. Invalid Action";
        }
        return strReturn;
    }

    private String findAll() {
        EmployeesDao employeesDao = new EmployeesDao();
        ArrayList<Employees> employees = employeesDao.findAll(null);
        return Employees.toArrayJson(employees);
    }
    private String add(Employees employee)
    {
        EmployeesDao employeesDao = new EmployeesDao();
        int iRet = employeesDao.add(employee);
        return String.valueOf(iRet);
    }
    private String delete(int i)
    {
        EmployeesDao employeesDao = new EmployeesDao();
        int iRet = employeesDao.delete(i);
        return String.valueOf(iRet);
    }
    private String update(Employees employee)
    {
        EmployeesDao employeesDao = new EmployeesDao();
        int iRet = employeesDao.update(employee);
        return String.valueOf(iRet);
    }
}
