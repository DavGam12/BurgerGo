package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Products {
    private int _productID, _currentProductID;
    private String _productName;
    private String _productImg;
    private String _productDescription;
    private float _productPrice;
    //private Categories _category;
    private int _categoryID;

    public void setProductID (int productID) {_productID = productID;}
    public void setProductName (String productName) {_productName = productName;}
    public void setProductImg (String productImg) {_productImg = productImg;}
    public void setProductDescription (String productDescription) {_productDescription = productDescription;}
    public void setProductPrice (float productPrice) {_productPrice = productPrice;}
    //public void setCategory (Categories category) {_category = category;}
    public void setCategoryID (int categoryID) {_categoryID = categoryID;}

    public int getCurrentProductID () {return _currentProductID;}
    public int getProductID () {return _productID;}
    public String getProductName () {return _productName;}
    public String getProductImg () {return _productImg;}
    public String getProductDescription () {return _productDescription;}
    public float getProductPrice () {return _productPrice;}
    //public Categories getCategory () {return _category;}
    public int getCategoryID () {return _categoryID;}

    public Products (int productID, String productName, String productImg, float productPrice, String  productDescription, /*Categories category,*/ int categoryID) {
        _productID = productID;
        _productName = productName;
        _productImg = productImg;
        _productPrice = productPrice;
        _productDescription = productDescription;
        //_category = category;
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
