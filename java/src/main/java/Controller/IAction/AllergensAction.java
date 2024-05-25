package Controller.IAction;

import Model.Allergens;
import Model.Customers;
import Model.IDao.AllergensDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class AllergensAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();
        String strReturn = "";

        switch (act) {
            case "find_all":
            {
                strReturn =findAll();
                break;
            }
            case "add":
            {
                Allergens allergen = gson.fromJson(parser.parse(getBody(req)), Allergens.class);
                strReturn = add(allergen);
                break;
            }
            case "delete":
            {
                Allergens allergen = gson.fromJson(parser.parse(getBody(req)), Allergens.class);
                strReturn = delete(allergen.getAllergenID());
                break;
            }
            case "update":
            {
                Allergens allergen = gson.fromJson(parser.parse(getBody(req)), Allergens.class);
                strReturn = update(allergen);
                break;
            }
            default:
                strReturn = "ERROR. Invalid Action";
        }
        return strReturn;
    }

    private String findAll () {
        AllergensDao allergensDao = new AllergensDao();
        ArrayList<Allergens> allergens = allergensDao.findAll(null);
        return Allergens.toArrayJson(allergens);
    }

    private String add (Allergens allergen) {
        AllergensDao allergensDao = new AllergensDao();
        int iRet = allergensDao.add(allergen);
        return String.valueOf(iRet);
    }

    private String delete (Integer i) {
        AllergensDao allergensDao = new AllergensDao();
        int iRet = allergensDao.delete(i);
        return String.valueOf(iRet);
    }

    private String update (Allergens allergen) {
        AllergensDao allergensDao = new AllergensDao();
        int iRet = allergensDao.update(allergen);
        return String.valueOf(iRet);
    }
}
