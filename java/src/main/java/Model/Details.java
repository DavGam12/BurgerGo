package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Details {
    private String _detailID;
    private int _productQuantity;
    private float _detailPrice;
    private String _orderID;
    private String _productID;

    public void setDetailID (String detailID) {_detailID = detailID;}
    public void setProductQuantity (int productQuantity) {_productQuantity = productQuantity;}
    public void setDetailPrice (float detailPrice) {_detailPrice = detailPrice;}
    public void setOrderID (String orderID) {_orderID = orderID;}
    public void setProductID (String productID) {_productID = productID;}

    public String getDetailID () {return _detailID;}
    public int getProductQuantity () {return _productQuantity;}
    public float getDetailPrice () {return _detailPrice;}
    public String getOrderID () {return _orderID;}
    public String getProductID () {return _productID;}

    public Details (String detailID, int productQuantity, float detailPrice, String orderID, String productID) {
        _detailID = detailID;
        _productQuantity = productQuantity;
        _detailPrice = detailPrice;
        _orderID = orderID;
        _productID = productID;
    }
    public Details () {}

    public static String toArrayJson(ArrayList<Details> details) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(details);
    }

}
