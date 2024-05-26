package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Details {
    private int _detailID, _currentDetailID;
    private int _productQuantity;
    private float _detailPrice;
    /*private Orders _order;
    private Products _product;*/
    private int _orderID;
    private int _productID;

    public void setDetailID (int detailID) {_detailID = detailID;}
    public void setProductQuantity (int productQuantity) {_productQuantity = productQuantity;}
    public void setDetailPrice (float detailPrice) {_detailPrice = detailPrice;}
    /*public void setOrder (Orders order) {_order = order;}
    public void setProduct (Products product) {_product = product;}*/
    public void setOrderID (int orderID) {_orderID = orderID;}
    public void setProductID (int productID) {_productID = productID;}

    public int getCurrentDetailID () {return _currentDetailID;}
    public int getDetailID () {return _detailID;}
    public int getProductQuantity () {return _productQuantity;}
    public float getDetailPrice () {return _detailPrice;}
    /*public Orders getOrder () {return _order;}
    public Products getProduct () {return _product;}*/
    public int getOrderID () {return _orderID;}
    public int getProductID () {return _productID;}

    public Details (int detailID, int productQuantity, float detailPrice, /*Orders order, Products product,*/ int orderID, int productID) {
        _detailID = detailID;
        _productQuantity = productQuantity;
        _detailPrice = detailPrice;
        /*_order = order;
        _product = product;*/
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

    public static String toArrayJson(Details detail) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(detail);
    }

}
