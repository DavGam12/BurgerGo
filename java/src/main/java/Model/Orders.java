package Model;

import java.util.Date;

public class Orders {
    private String _orderID;
    private String _orderState;
    private String _location;
    private float _orderPrice;
    private Date _orderDate;
    private String _employeeID;
    private String _customerID;

    private void setOrderID (String orderID) {_orderID = orderID;}
    private void setOrderState (String orderState) {_orderState = orderState;}
    private void setLocation (String location) {_location = location;}
    private void setOrderPrice (float orderPrice) {_orderPrice = orderPrice;}
    private void setOrderDate (Date orderDate) {_orderDate = orderDate;}
    private void setEmployeeID (String employeeID) {_employeeID = employeeID;}
    private void setCustomerID (String customerID) {_customerID = customerID;}

    public String getOrderID () {return _orderID;}
    public String getOrderState () {return _orderState;}
    public String getLocation () {return _location;}
    public float getOrderPrice () {return _orderPrice;}
    public Date getOrderDate () {return _orderDate;}
    public String getEmployeeID () {return _employeeID;}
    public String getCustomerID () {return _customerID;}

    public Orders (String orderID, String orderState, String location, float orderPrice, Date orderDate, String employeeID, String customerID) {
        _orderID = orderID;
        _orderState = orderState;
        _location = location;
        _orderPrice = orderPrice;
        _orderDate = orderDate;
        _employeeID = employeeID;
        _customerID = customerID;
    }
    public Orders () {}

}
