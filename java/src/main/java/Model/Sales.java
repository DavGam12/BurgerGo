package Model;

public class Sales {
    private String _saleID;
    private String _saleName;
    private String _saleDisscount;

    private void setSaleID (String saleID) {_saleID = saleID;}
    private void setSaleName (String saleName) {_saleName = saleName;}
    private void setSaleDisscount (String saleDisscount) {_saleDisscount = saleDisscount;}

    public String getSaleID () {return _saleID;}
    public String getSaleName () {return _saleName;}
    public String getSaleDisscount () {return _saleDisscount;}

    public Sales (String saleID, String saleName, String saleDisscount) {
        _saleID = saleID;
        _saleName = saleName;
        _saleDisscount = saleDisscount;
    }
    public Sales () {}

}
