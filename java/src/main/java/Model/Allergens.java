package Model;

public class Allergens {
    private String _allergenID;
    private String _allergenName;
    private String _allergenImg;

    private void setAllergenID (String allergenID) {_allergenID = allergenID;}
    private void setAllergenName (String allergenName) {_allergenName = allergenName;}
    private void setAllergenImg (String allergenImg) {_allergenImg = allergenImg;}

    public String getAllergenID () {return _allergenID;}
    public String getAllergenName () {return _allergenName;}
    public String getAllergenImg () {return _allergenImg;}

    public Allergens (String allergenID, String allergenName, String allergenImg) {
        _allergenID = allergenID;
        _allergenName = allergenName;
        _allergenImg = allergenImg;
    }
    public Allergens () {}

}
