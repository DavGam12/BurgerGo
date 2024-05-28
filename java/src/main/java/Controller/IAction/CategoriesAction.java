package Controller.IAction;

import Model.Categories;
import Model.IDao.CategoriesDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;


public class CategoriesAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();
        String strReturn = "";

        switch (act)
        {
            case "find_all":
            {
                strReturn = findAll();
                break;
            }
            case "add":
            {
                Categories categories = gson.fromJson(parser.parse(getBody(req)), Categories.class);
                strReturn = add(categories);
                break;
            }
            case "delete":
            {
                Categories categories = gson.fromJson(parser.parse(getBody(req)), Categories.class);
                strReturn = delete(categories.getCategoryID());
                break;
            }
            case "update":
            {
                Categories categories = gson.fromJson(parser.parse(getBody(req)), Categories.class);
                strReturn = update(categories);
                break;
            }
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

    private String add(Categories categories)
    {
        CategoriesDao categoriesDao = new CategoriesDao();
        int iRet = categoriesDao.add(categories);
        return String.valueOf(iRet);
    }

    private String delete(Integer i)
    {
        CategoriesDao categoriesDao = new CategoriesDao();
        int iRet = categoriesDao.delete(i);
        return String.valueOf(iRet);
    }

    private String update(Categories categories)
    {
        CategoriesDao categoriesDao = new CategoriesDao();
        int iRet = categoriesDao.update(categories);
        return String.valueOf(iRet);
    }
}
