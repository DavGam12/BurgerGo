package Model.IDao;

import Model.Orders;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class OrdersDao implements IDao<Orders, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from orders";
    @Override
    public int add(Orders orders) {
        return 0;
    }

    @Override
    public int delete(Integer e) {
        return 0;
    }

    @Override
    public int update(Orders orders) {
        return 0;
    }

    @Override
    public ArrayList<Orders> findAll(Orders o)
    {
        ArrayList<Orders> orders = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Orders order = new Orders();
                order.setOrderID(rs.getString("order_id"));
                order.setOrderState(rs.getString("order_state"));
                order.setDirection(rs.getString("direction"));
                order.setOrderPrice(rs.getFloat("order_price"));
                order.setOrderDate(rs.getDate("order_date"));
                order.setEmployeeID(rs.getString("employee_id"));
                order.setCustomerID(rs.getString("customer_id"));

                orders.add(order);
            }
        }
        catch (Exception ex) {orders.clear();}
        finally {motor.disconnect();}

        return orders;
    }
}
