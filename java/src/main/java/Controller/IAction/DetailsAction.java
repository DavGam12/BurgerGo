package Controller.IAction;

import Model.Details;
import Model.IDao.DetailsDao;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class DetailsAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        String strRet = "";

        switch (act)
        {
            case "find_all":
                strRet = findAll();
                break;
            default:
                strRet = "ERROR. Invalid Action";
        }

        return strRet;
    }

    private String findAll()
    {
        DetailsDao detailsDao = new DetailsDao();
        ArrayList<Details> details = detailsDao.findAll(null);
        return Details.toArrayJson(details);
    }
}
