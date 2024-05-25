package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Allergies {
    private int _allergyID;
    /*private Allergens _allergen;
    private Products _product;*/
    private int _allergenID;
    private int _productID;

    public void setAllergyID (int allergyID) {_allergyID = allergyID;}
    /*public void setAllergen (Allergens allergen) {_allergen = allergen;}
    public void setProduct (Products product) {_product = product;}*/
   public void setAllergenID (int allergenID) {_allergenID = allergenID;}
    public void setProductID (int productID) {_productID = productID;}

    public int getAllergyID () {return _allergyID;}
    /*public Allergens getAllergen () {return _allergen;}
    public Products getProduct () {return _product;}*/
    public int getAllergenID () {return _allergenID;}
    public int getProductID () {return _productID;}

    public Allergies (int allergyID,/* Allergens allergen, Products product,*/ int allergenID, int productID) {
        _allergyID = allergyID;
        /*_allergen = allergen;
        _product = product;*/
        _allergenID = allergenID;
        _productID = productID;
    }
    public Allergies () {}

    public static String toArrayJson(ArrayList<Allergies> allergies) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(allergies);
    }

}
