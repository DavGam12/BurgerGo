package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Allergies {
    private String _allergyID;
    private String _allergenID;
    private String _productID;

    public void setAllergyID (String allergyID) {_allergyID = allergyID;}
    public void setAllergenID (String allergenID) {_allergenID = allergenID;}
    public void setProductID (String productID) {_productID = productID;}

    public String getAllergyID () {return _allergyID;}
    public String getAllergenID () {return _allergenID;}
    public String getProductID () {return _productID;}

    public Allergies (String allergyID, String allergenID, String productID) {
        _allergyID = allergyID;
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
