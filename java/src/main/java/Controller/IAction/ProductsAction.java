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
                strReturn = findBurgers();
                break;
            case "kids":
                strReturn = findKids();
                break;
            case "desserts":
                strReturn = findDesserts();
                break;
            case "drinks":
                strReturn = findDrinks();
                break;
            case "others":
                strReturn = findOthers();
                break;
            case "gluten-free":
                strReturn = findGlutenFree();
                break;
            case "find_all":
                strReturn = findAll();
                break;
            default:
                strReturn = "ERROR. Invalid action";
        }
        return strReturn;
    }

    private String findAll () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findAll(null);
        return Products.toArrayJson(products);
    }
    private String findBurgers () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findBurgers(null);
        return Products.toArrayJson(products);
    }
    private String findKids () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findKids(null);
        return Products.toArrayJson(products);
    }
    private String findDesserts () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findDesserts(null);
        return Products.toArrayJson(products);
    }
    private String findDrinks () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findDrinks(null);
        return Products.toArrayJson(products);
    }
    private String findOthers () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findOthers(null);
        return Products.toArrayJson(products);
    }
    private String findGlutenFree () {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findGlutenFree(null);
        return Products.toArrayJson(products);
    }
}
