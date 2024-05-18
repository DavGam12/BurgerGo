package Controller.IAction;

import Model.Categories;
import Model.IDao.CategoriesDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;


public class CategoriesAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
        String strReturn = "";
        switch (act)
        {
            case "find_all":
                strReturn = findAll();
                break;
            default:
                strReturn = "ERROR. Invalid Action";
        }

        return strReturn;
    }

    private String findAll()
    {
        CategoriesDao categoriesDao = new CategoriesDao();
        ArrayList<Categories> categories = categoriesDao.findAll(null);
        return Categories.toArrayJson(categories);
    }
}
