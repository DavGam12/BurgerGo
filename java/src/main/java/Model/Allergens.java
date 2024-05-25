package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Allergens {
    private int _allergenID, _currentAllergenID; // preguntar a Antón
    private String _allergenName;
    private String _allergenImg;

    public void setAllergenID (int allergenID) {_allergenID = allergenID;}
    public void setAllergenName (String allergenName) {_allergenName = allergenName;}
    public void setAllergenImg (String allergenImg) {_allergenImg = allergenImg;}

    public int getAllergenID () {return _allergenID;}
    public String getAllergenName () {return _allergenName;}
    public String getAllergenImg () {return _allergenImg;}
    public int getCurrentAllergenID () {return _currentAllergenID;}

    public Allergens (int allergenID, String allergenName, String allergenImg) {
        _allergenID = allergenID;
        _allergenName = allergenName;
        _allergenImg = allergenImg;
    }
    public Allergens () {}

    public static String toArrayJson(ArrayList<Allergens> allergens) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(allergens);
    }

}
