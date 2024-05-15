package Model;

public class Products {
    private String _productID;
    private String _productName;
    private String _productImg;
    private String _productDescription;
    private float _productPrice;
    private String _categoryID;

    private void setProductID (String productID) {_productID = productID;}
    private void setProductName (String productName) {_productName = productName;}
    private void setProductImg (String productImg) {_productImg = productImg;}
    private void setProductDescription (String productDescription) {_productDescription = productDescription;}
    private void setProductPrice (float productPrice) {_productPrice = productPrice;}
    private void setCategoryID (String categoryID) {_categoryID = categoryID;}

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

}
