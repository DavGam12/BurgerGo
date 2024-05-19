package Controller.IAction;

import Model.IDao.OrdersDao;
import Model.Orders;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class OrdersAction implements IAction {
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
        OrdersDao ordersDao = new OrdersDao();
        ArrayList<Orders> orders = ordersDao.findAll(null);
        return Orders.toArrayJson(orders);
    }
}
