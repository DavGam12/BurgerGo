package Model;

public class Categories {
    private String _categoryID;
    private String _categoryName;

    private void setCategoryID (String categoryID) {_categoryID = categoryID;}
    private void setCategoryName (String categoryName) {_categoryName = categoryName;}

    public String getCategoryID () {return _categoryID;}
    public String setCategoryName () {return _categoryName;}

    public Categories (String categoryID, String categoryName) {
        _categoryID = categoryID;
        _categoryName = categoryName;
    }
    public Categories () {}

}
