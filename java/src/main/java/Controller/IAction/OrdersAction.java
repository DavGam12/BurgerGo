package Controller.IAction;

import Model.IDao.OrdersDao;
import Model.Jobs;
import Model.Orders;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class OrdersAction implements IAction {
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
            case "find_specific":
            {
                String order_state = req.getParameter("order_state");
                int customer_id = Integer.parseInt(req.getParameter("customer_id"));
                strRet = findSpecific(order_state, customer_id);
                break;
            }
            case "add":
            {
                Orders order = gson.fromJson(parser.parse(getBody(req)), Orders.class);
                strRet = add(order);
                break;
            }
            case "delete":
            {
                Orders order = gson.fromJson(parser.parse(getBody(req)), Orders.class);
                strRet = delete(order.getOrderID());
                break;
            }
            case "update":
            {
                Orders order = gson.fromJson(parser.parse(getBody(req)), Orders.class);
                strRet = update(order);
                break;
            }
            case "update_specific":
            {
                Orders order = gson.fromJson(parser.parse(getBody(req)), Orders.class);
                strRet = updateSpecific(order);
                break;
            }
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
    private String findSpecific(String order_state, int customer_id)
    {
        OrdersDao ordersDao = new OrdersDao();
        Orders order = ordersDao.findSpecific(order_state, customer_id);
        return Orders.toArrayJson(order);
    }
    private String add(Orders order)
    {
        OrdersDao ordersDao = new OrdersDao();
        Integer iRet = ordersDao.add(order);
        return iRet.toString();
    }
    private String delete(Integer i)
    {
        OrdersDao ordersDao = new OrdersDao();
        Integer iRet = ordersDao.delete(i);
        return iRet.toString();
    }
    private String update(Orders order)
    {
        OrdersDao ordersDao = new OrdersDao();
        Integer iRet = ordersDao.update(order);
        return iRet.toString();
    }
    private String updateSpecific(Orders order)
    {
        OrdersDao ordersDao = new OrdersDao();
        Integer iRet = ordersDao.updateSpecific(order);
        return iRet.toString();
    }
}
