package Controller.IAction;

import Model.IDao.JobsDao;
import Model.Jobs;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

public class JobsAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act) {
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
        JobsDao jobsDao = new JobsDao();
        ArrayList<Jobs> jobs = jobsDao.findAll(null);
        return Jobs.toArrayJson(jobs);
    }
}
