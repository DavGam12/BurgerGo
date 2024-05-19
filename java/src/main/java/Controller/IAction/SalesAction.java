package Controller.IAction;

import Model.IDao.SalesDao;
import Model.Sales;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class SalesAction implements IAction{
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
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
        SalesDao salesDao = new SalesDao();
        ArrayList<Sales> sales = salesDao.findAll(null);
        return Sales.toArrayJson(sales);
    }
}
