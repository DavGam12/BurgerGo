package Controller.IAction;

import Model.Products;
import Model.IDao.ProductsDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class ProductsAction implements IAction {

    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();
        String strReturn;

        switch (act.toLowerCase()) {
            case "burgers":
            {
                strReturn = findAllByCategory("burgers");
                break;
            }
            case "kids":
            {
                strReturn = findAllByCategory("kids");
                break;
            }
            case "desserts":
            {
                strReturn = findAllByCategory("desserts");
                break;
            }
            case "drinks":
            {
                strReturn = findAllByCategory("drinks");
                break;
            }
            case "others":
            {
                strReturn = findAllByCategory("others");
                break;
            }
            case "gluten_free":
            {
                strReturn = findAllByCategory("gluten-free");
                break;
            }
            case "find_all":
            {
                strReturn = findAll();
                break;
            }
            case "add":
            {
                Products product = gson.fromJson(parser.parse(getBody(req)), Products.class);
                strReturn = add(product);
                break;
            }
            case "delete":
            {
                Products product = gson.fromJson(parser.parse(getBody(req)), Products.class);
                strReturn = delete(product.getProductID());
                break;
            }
            case "update":
            {
                Products product = gson.fromJson(parser.parse(getBody(req)), Products.class);
                strReturn = update(product);
                break;
            }
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
    private String findAllByCategory (String category) {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findAllByCategory(category);
        return Products.toArrayJson(products);
    }
    private String add (Products prod) {
        ProductsDao productsDao = new ProductsDao();
        int res = productsDao.add(prod);
        return String.valueOf(res);
    }
    private String delete (Integer i) {
        ProductsDao productsDao = new ProductsDao();
        int res = productsDao.delete(i);
        return String.valueOf(res);
    }
    private String update (Products prod) {
        ProductsDao productsDao = new ProductsDao();
        int res = productsDao.update(prod);
        return String.valueOf(res);
    }
}
