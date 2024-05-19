package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Sales {
    private String _saleID;
    private String _saleName;
    private int _saleDisscount;

    public void setSaleID (String saleID) {_saleID = saleID;}
    public void setSaleName (String saleName) {_saleName = saleName;}
    public void setSaleDisscount (int saleDisscount) {_saleDisscount = saleDisscount;}

    public String getSaleID () {return _saleID;}
    public String getSaleName () {return _saleName;}
    public int getSaleDisscount () {return _saleDisscount;}

    public Sales (String saleID, String saleName, int saleDisscount) {
        _saleID = saleID;
        _saleName = saleName;
        _saleDisscount = saleDisscount;
    }
    public Sales () {}

    public static String toArrayJson(ArrayList<Sales> sales) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(sales);
    }

}
