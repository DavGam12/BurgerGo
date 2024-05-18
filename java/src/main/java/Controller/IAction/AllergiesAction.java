package Controller.IAction;

import Model.Allergies;
import Model.IDao.AllergiesDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class AllergiesAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
        String strReturn = "";

        switch (act.toLowerCase()) {
            case "find_all":
                strReturn = findAll();
                break;
            case "automation":
                strReturn = automation();
                break;
            case "delete_all":
                strReturn = deleteAll();
                break;
            default:
                strReturn = "ERROR. Invalid Action.";
        }
        return strReturn;
    }

    private String findAll () {
        AllergiesDao allergiesDao = new AllergiesDao();
        ArrayList<Allergies> allergies = allergiesDao.findAll(null);
        return Allergies.toArrayJson(allergies);
    }

    private String automation () {
        AllergiesDao allergiesDao = new AllergiesDao();
        int res = allergiesDao.automation();
        return String.valueOf(res);
    }

    private String deleteAll () {
        AllergiesDao allergiesDao = new AllergiesDao();
        int res = allergiesDao.deleteAll();
        return String.valueOf(res);
    }
}
