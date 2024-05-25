package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Categories {
    private int _categoryID, _currentCategoryID;
    private String _categoryName;

    public void setCategoryID (int categoryID) {_categoryID = categoryID;}
    public void setCategoryName (String categoryName) {_categoryName = categoryName;}

    public int getCurrentCategoryID () {return _currentCategoryID;}
    public int getCategoryID () {return _categoryID;}
    public String getCategoryName () {return _categoryName;}

    public Categories (int categoryID, String categoryName) {
        _categoryID = categoryID;
        _categoryName = categoryName;
    }
    public Categories () {}

    public static String toArrayJson(ArrayList<Categories> categories) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(categories);
    }

}
