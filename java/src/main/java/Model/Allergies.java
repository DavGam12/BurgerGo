package Model;

public class Allergies {
    private String _allergyID;
    private String _allergenID;
    private String _productID;

    private void setAllergyID (String allergyID) {_allergyID = allergyID;}
    private void setAllergenID (String allergenID) {_allergenID = allergenID;}
    private void setProductID (String productID) {_productID = productID;}

    public String getAllergyID () {return _allergyID;}
    public String getAllergenID () {return _allergenID;}
    public String getProductID () {return _productID;}

    public Allergies (String allergyID, String allergenID, String productID) {
        _allergyID = allergyID;
        _allergenID = allergenID;
        _productID = productID;
    }
    public Allergies () {}

}
