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
            case "addition":
                strReturn = addition(new Allergens(req.getParameter("id"), req.getParameter("name"), req.getParameter("img")));
                break;
            case "deletion":
                strReturn = deletion(Integer.valueOf(req.getParameter("id")));
                break;
            case "update":
                strReturn = update(new Allergens(req.getParameter("id"), req.getParameter("name"), req.getParameter("img")));
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

    private String addition (Allergens allergen) {
        AllergensDao allergensDao = new AllergensDao();
        int iRet = allergensDao.add(allergen);
        return String.valueOf(iRet);
    }

    private String deletion (Integer i) {
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
