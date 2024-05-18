package Controller.IAction;

import Model.Allergens;
import Model.IDao.AllergensDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class AllergensAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
        String strReturn = "";

        switch (act) {
            case "find_all":
                strReturn =findAll();
                break;
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
}
