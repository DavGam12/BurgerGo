package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Products {
    private String _productID;
    private String _productName;
    private String _productImg;
    private String _productDescription;
    private float _productPrice;
    private String _categoryID;

    public void setProductID (String productID) {_productID = productID;}
    public void setProductName (String productName) {_productName = productName;}
    public void setProductImg (String productImg) {_productImg = productImg;}
    public void setProductDescription (String productDescription) {_productDescription = productDescription;}
    public void setProductPrice (float productPrice) {_productPrice = productPrice;}
    public void setCategoryID (String categoryID) {_categoryID = categoryID;}

    public String getProductID () {return _productID;}
    public String getProductName () {return _productName;}
    public String getProductImg () {return _productImg;}
    public String getProductDescription () {return _productDescription;}
    public float getProductPrice () {return _productPrice;}
    public String getCategoryID () {return _categoryID;}

    public Products (String productID, String productName, String productImg, String productDescription, float productPrice, String categoryID) {
        _productID = productID;
        _productName = productName;
        _productImg = productImg;
        _productDescription = productDescription;
        _productPrice = productPrice;
        _categoryID = categoryID;
    }
    public Products () {}

    public static String toArrayJson(ArrayList<Products> Products) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(Products);
    }

}