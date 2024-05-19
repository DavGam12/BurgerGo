package Controller.IAction;

import Model.Customers;
import Model.IDao.CustomersDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class CustomersAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        String strRet = "";

        switch (act)
        {
            case "find_all":
                strRet = findAll();
                break;
            case "addition":
                strRet = addition(new
                        Customers(null,
                        req.getParameter("firstName"),
                        req.getParameter("lastName"),
                        req.getParameter("email"),
                        req.getParameter("phoneNumber"),
                        req.getParameter("password")));
                break;
            case "deletion":
                strRet = deletion(Integer.valueOf(req.getParameter("id")));
                break;
            default:
                strRet = "ERROR. Invalid Action";
        }

        return strRet;
    }

    private String findAll()
    {
        CustomersDao customersDao = new CustomersDao();
        ArrayList<Customers> customers = customersDao.findAll(null);
        return Customers.toArrayJson(customers);
    }

    private String addition(Customers customer)
    {
        CustomersDao customersDao = new CustomersDao();
        int iRes = customersDao.add(customer);
        return String.valueOf(iRes);
    }

    private String deletion(Integer i)
    {
        CustomersDao customersDao = new CustomersDao();
        int iRes = customersDao.delete(i);
        return String.valueOf(iRes);
    }
}
