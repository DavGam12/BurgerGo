package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;
import java.util.Date;

public class Sales_Management {
    private String _salesManagementID;
    private Date _startDate;
    private Date _endDate;
    private String _saleID;
    private String _productID;

    public void setSalesManagementID (String salesManagementID) {_salesManagementID = salesManagementID;}
    public void setStartDate (Date startDate) {_startDate = startDate;}
    public void setEndDate (Date endDate) {_endDate = endDate;}
    public void setSaleID (String saleID) {_saleID = saleID;}
    public void setProductID (String productID) {_productID = productID;}

    public String getSalesManagementID () {return _salesManagementID;}
    public Date getStartDate () {return _startDate;}
    public Date getEndDate () {return _endDate;}
    public String getSaleID () {return _saleID;}
    public String getProductID () {return _productID;}

    public Sales_Management (String salesManagementID, Date startDate, Date endDate, String saleID, String productID) {
        _salesManagementID = salesManagementID;
        _startDate = startDate;
        _endDate = endDate;
        _saleID = saleID;
        _productID = productID;
    }
    public Sales_Management () {}

    public static String toArrayJson(ArrayList<Sales_Management> sales_Management) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(sales_Management);
    }

}
