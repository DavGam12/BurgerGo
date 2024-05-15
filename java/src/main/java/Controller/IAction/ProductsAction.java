package Controller.IAction;

import Model.IDao.ProductsDao;
import Model.Products;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class ProductsAction implements IAction {

    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
        String strReturn = "";

        switch (act.toLowerCase()) {
            case "burgers":
                strReturn = findAll();
                break;
            case "kids":
            case "desserts":
            case "drinks":
            case "others":
        }
        return strReturn;
    }

    private String findAll () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findAll(null);
        return Products.toArrayJson(products);
    }
}
