package Controller.IAction;

import Model.Customers;
import Model.IDao.CustomersDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class CustomersAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();
        String strRet = "";

        switch (act)
        {
            case "find_all":
            {
                strRet = findAll();
                break;
            }
            case "add":
            {
                Customers customer = gson.fromJson(parser.parse(getBody(req)), Customers.class);
                strRet = add(customer);
                break;
            }
            case "delete":
            {
                Customers customer = gson.fromJson(parser.parse(getBody(req)), Customers.class);
                strRet = delete(Integer.valueOf(customer.getCustomerID()));
                break;
            }
            case "update":
            {
                Customers customer = gson.fromJson(parser.parse(getBody(req)), Customers.class);
                strRet = update(customer);
                break;
            }
            case "login":
            {
                Customers customer = gson.fromJson(parser.parse(getBody(req)), Customers.class);
                strRet = login(customer);
                break;
            }
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

    private String add(Customers customer)
    {
        CustomersDao customersDao = new CustomersDao();
        int iRes = customersDao.add(customer);
        return String.valueOf(iRes);
    }

    private String delete(Integer i)
    {
        CustomersDao customersDao = new CustomersDao();
        int iRes = customersDao.delete(i);
        return String.valueOf(iRes);
    }

    private String update(Customers customer)
    {
        CustomersDao customersDao = new CustomersDao();
        int iRes = customersDao.update(customer);
        return String.valueOf(iRes);
    }

    private String login(Customers customer)
    {
        CustomersDao customersDao = new CustomersDao();
        int iRes = customersDao.login(customer);
        return String.valueOf(iRes);
    }
}
