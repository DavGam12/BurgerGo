package Model.IDao;

import Model.Orders;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class OrdersDao implements IDao<Orders, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from orders order by order_id";
    private final String SQL_FIND_SPECIFIC = "select * from orders where order_state=";
    private final String SQL_ADD = "insert into orders (order_state, direction, order_price, order_date, employee_id, customer_id) values";
    private final String SQL_DELETE = "delete from orders where order_id=";
    private final String SQL_UPDATE = "update orders set ";
    @Override
    public int add(Orders o) {
        int iRet = 0;

        try
        {

            motor.connect();
            String sql = SQL_ADD + "('" +
                    o.getOrderState() + "', '" +
                    o.getDirection() + "', " +
                    o.getOrderPrice() + ", '" +
                    o.getOrderDate() + "', " +
                    o.getEmployeeID() + ", " +
                    o.getCustomerID() + ")";

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
    }

    @Override
    public int delete(Integer i) {
        int iRet = 0;

        try
        {
            motor.connect();
            iRet = motor.executeUpdate(SQL_DELETE+i);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
    }

    @Override
    public int update(Orders o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_UPDATE + "order_id=" +
                    o.getOrderID() + ", order_state='" +
                    o.getOrderState() + "', direction='" +
                    o.getDirection() + "', order_price=" +
                    o.getOrderPrice() + ", order_date='" +
                    o.getOrderDate() + "', employee_id=" +
                    o.getEmployeeID() + ", customer_id=" +
                    o.getCustomerID() + " where order_id=" + o.getOrderID();

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
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
                order.setOrderID(rs.getInt("order_id"));
                order.setOrderState(rs.getString("order_state"));
                order.setDirection(rs.getString("direction"));
                order.setOrderPrice(rs.getFloat("order_price"));
                order.setOrderDate(rs.getString("order_date"));
                order.setEmployeeID(rs.getInt("employee_id"));
                order.setCustomerID(rs.getInt("customer_id"));

                orders.add(order);
            }
        }
        catch (Exception ex) {orders.clear();}
        finally {motor.disconnect();}

        return orders;
    }

    public int updateSpecific(Orders o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_UPDATE + "order_price=" + o.getOrderPrice() + " where order_id=" + o.getCurrentOrderID();

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
    }

    public Orders findSpecific(String order_state, int id){
        Orders order = new Orders();
        try
        {
            motor.connect();
            String sql = SQL_FIND_SPECIFIC +"'"+order_state+"'" + " and customer_id=" + id;

            ResultSet rs = motor.executeQuery(sql);

            while (rs.next())
            {
                order.setOrderID(rs.getInt("order_id"));
                order.setOrderState(rs.getString("order_state"));
                order.setDirection(rs.getString("direction"));
                order.setOrderPrice(rs.getFloat("order_price"));
                order.setOrderDate(rs.getString("order_date"));
                order.setEmployeeID(rs.getInt("employee_id"));
                order.setCustomerID(rs.getInt("customer_id"));
            }
        }
        catch (Exception ex) {order=null;}
        finally {motor.disconnect();}
        return order;
    }

    public ArrayList<Orders> findSpecificPastOrders(String order_state, int id){
        ArrayList<Orders> orders = new ArrayList<>();
        try
        {
            motor.connect();
            String sql = SQL_FIND_SPECIFIC.replace("=", "!=") +"'"+order_state+"'" + " and customer_id=" + id;

            ResultSet rs = motor.executeQuery(sql);

            while (rs.next())
            {
                Orders order = new Orders();
                order.setOrderID(rs.getInt("order_id"));
                order.setOrderState(rs.getString("order_state"));
                order.setDirection(rs.getString("direction"));
                order.setOrderPrice(rs.getFloat("order_price"));
                order.setOrderDate(rs.getString("order_date"));
                order.setEmployeeID(rs.getInt("employee_id"));
                order.setCustomerID(rs.getInt("customer_id"));

                orders.add(order);
            }
        }
        catch (Exception ex) {orders.clear();}
        finally {motor.disconnect();}
        return orders;
    }
}
