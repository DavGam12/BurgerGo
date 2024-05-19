package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;
import java.util.Date;

public class Orders {
    private String _orderID;
    private String _orderState;
    private String _direction;
    private float _orderPrice;
    private Date _orderDate;
    private String _employeeID;
    private String _customerID;

    public void setOrderID (String orderID) {_orderID = orderID;}
    public void setOrderState (String orderState) {_orderState = orderState;}
    public void setDirection (String direction) {_direction = direction;}
    public void setOrderPrice (float orderPrice) {_orderPrice = orderPrice;}
    public void setOrderDate (Date orderDate) {_orderDate = orderDate;}
    public void setEmployeeID (String employeeID) {_employeeID = employeeID;}
    public void setCustomerID (String customerID) {_customerID = customerID;}

    public String getOrderID () {return _orderID;}
    public String getOrderState () {return _orderState;}
    public String getDirection () {return _direction;}
    public float getOrderPrice () {return _orderPrice;}
    public Date getOrderDate () {return _orderDate;}
    public String getEmployeeID () {return _employeeID;}
    public String getCustomerID () {return _customerID;}

    public Orders (String orderID, String orderState, String direction, float orderPrice, Date orderDate, String employeeID, String customerID) {
        _orderID = orderID;
        _orderState = orderState;
        _direction = direction;
        _orderPrice = orderPrice;
        _orderDate = orderDate;
        _employeeID = employeeID;
        _customerID = customerID;
    }
    public Orders () {}

    public static String toArrayJson(ArrayList<Orders> orders) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(orders);
    }

}
