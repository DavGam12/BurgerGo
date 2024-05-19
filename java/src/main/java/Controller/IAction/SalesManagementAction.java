package Controller.IAction;

import Model.IDao.SalesManagementDao;
import Model.Sales_Management;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class SalesManagementAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        String strRet = "";

        switch (act)
        {
            case "find_all":
                strRet = findAll();
                break;
            default:
                strRet = "ERROR. Invalid Action";
        }

        return strRet;
    }

    private String findAll()
    {
        SalesManagementDao salesManagementDao = new SalesManagementDao();
        ArrayList<Sales_Management> salesManagements = salesManagementDao.findAll(null);
        return Sales_Management.toArrayJson(salesManagements);
    }
}
