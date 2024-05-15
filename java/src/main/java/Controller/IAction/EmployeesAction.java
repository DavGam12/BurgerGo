package Controller.IAction;

import Model.Employees;
import Model.IDao.EmployeesDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class EmployeesAction implements IAction{
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {

        String strReturn = "";

        switch (act)
        {
            case "find_first":
                // strReturn
                break;
            case "find_all":
                    /*Film film = new Film();
                    film.setTitle("Test");
                    film.setDuration(12);*/
                strReturn = findAll(); // strReturn = findAll(film);
                break;
            default:
                strReturn = "ERROR. Invalid Action";
        }
        return strReturn;
    }

    private String findAll(/*Employees employees*/) {
        EmployeesDao employeeDao = new EmployeesDao();
        ArrayList<Employees> employees = employeeDao.findAll(null);
        return Employees.toArrayJson(employees);
    }
}
