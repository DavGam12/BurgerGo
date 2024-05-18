package Controller.IAction;

import Model.Products;
import Model.IDao.ProductsDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class ProductsAction implements IAction {

    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
        String strReturn;

        switch (act.toLowerCase()) {
            case "burgers":
                strReturn = findAllByCategory("burgers");
                break;
            case "kids":
                strReturn = findAllByCategory("kids");
                break;
            case "desserts":
                strReturn = findAllByCategory("desserts");
                break;
            case "drinks":
                strReturn = findAllByCategory("drinks");
                break;
            case "others":
                strReturn = findAllByCategory("others");
                break;
            case "gluten_free":
                strReturn = findAllByCategory("gluten-free");
                break;
            case "find_all":
                strReturn = findAll();
                break;
            // http://localhost:8080/BurgerGo/Controller?action=products.addition&id=100&name=test&img=../Images/Products/barbecue.png&description=abcdefu&price=7.8&cat_id=BG
            case "addition":
                strReturn = addition(new Products(req.getParameter("id"), req.getParameter("name"), req.getParameter("img"), Float.parseFloat(req.getParameter("price")), req.getParameter("description"), req.getParameter("cat_id")));
                break;
            // http://localhost:8080/BurgerGo/Controller?action=products.delete&id=100
            case "delete":
                strReturn = delete(Integer.valueOf(req.getParameter("id")));
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
    private String findAllByCategory (String category) {
        ProductsDao productsDao = new ProductsDao();
        ArrayList<Products> products = productsDao.findAllByCategory(category);
        return Products.toArrayJson(products);
    }
    private String addition (Products prod) {
        ProductsDao productsDao = new ProductsDao();
        int res = productsDao.add(prod);
        return String.valueOf(res);
    }
    private String delete (Integer i) {
        ProductsDao productsDao = new ProductsDao();
        int res = productsDao.delete(i);
        return String.valueOf(res);
    }
}
