package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;
import java.util.Date;

public class Orders {
    private int _orderID, _currentOrderID;
    private String _orderState;
    private String _direction;
    private float _orderPrice;
    private String _orderDate;
    /*private Employees _employee;
    private Customers _customer;*/
    private Integer _employeeID;
    private Integer _customerID;

    public void setOrderID (int orderID) {_orderID = orderID;}
    public void setOrderState (String orderState) {_orderState = orderState;}
    public void setDirection (String direction) {_direction = direction;}
    public void setOrderPrice (float orderPrice) {_orderPrice = orderPrice;}
    public void setOrderDate (String orderDate) {_orderDate = orderDate.replace(" 00:00:00", "");}
    /*public void setEmployee (Employees employee) {_employee = employee;}
    public void setCustomer (Customers customer) {_customer = customer;}*/
    public void setEmployeeID (Integer employeeID) {_employeeID = employeeID;}
    public void setCustomerID (Integer customerID) {_customerID = customerID;}

    public int getCurrentOrderID () {return _currentOrderID;}
    public int getOrderID () {return _orderID;}
    public String getOrderState () {return _orderState;}
    public String getDirection () {return _direction;}
    public float getOrderPrice () {return _orderPrice;}
    public String getOrderDate () {return _orderDate.replace(" 00:00:00", "");}
    /*public Employees getEmployee () {return _employee;}
    public Customers getCustomer () {return _customer;}*/
    public Integer getEmployeeID () {return _employeeID;}
    public Integer getCustomerID () {return _customerID;}

    public Orders (int orderID, String orderState, String direction, float orderPrice, String orderDate, /*Employees employee, Customers customer,*/ Integer employeeID, Integer customerID) {
        _orderID = orderID;
        _orderState = orderState;
        _direction = direction;
        _orderPrice = orderPrice;
        _orderDate = orderDate;
        /*_employee = employee;
        _customer = customer;*/
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
    public static String toArrayJson(Orders order) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(order);
    }

}
