package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Categories {
    private String _categoryID;
    private String _categoryName;

    public void setCategoryID (String categoryID) {_categoryID = categoryID;}
    public void setCategoryName (String categoryName) {_categoryName = categoryName;}

    public String getCategoryID () {return _categoryID;}
    public String getCategoryName () {return _categoryName;}

    public Categories (String categoryID, String categoryName) {
        _categoryID = categoryID;
        _categoryName = categoryName;
    }
    public Categories () {}

    public static String toArrayJson(ArrayList<Categories> Categories) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(Categories);
    }

}
