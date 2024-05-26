package Controller.IAction;

import Model.Employees;
import Model.IDao.JobsDao;
import Model.Jobs;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class JobsAction implements IAction {
    @Override
    public String execute(HttpServletResponse res, HttpServletRequest req, String act)
    {
        JsonParser parser = new JsonParser();
        Gson gson = new Gson();
        String strRet = "";

        switch (act)
        {
            case "find_all":
            {
                strRet = findAll();
                break;
            }
            case "add":
            {
                Jobs job = gson.fromJson(parser.parse(getBody(req)), Jobs.class);
                strRet = add(job);
                break;
            }
            case "delete":
            {
                Jobs job = gson.fromJson(parser.parse(getBody(req)), Jobs.class);
                strRet = delete(job.getJobID());
                break;
            }
            case "update":
            {
                Jobs job = gson.fromJson(parser.parse(getBody(req)), Jobs.class);
                strRet = update(job);
                break;
            }
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
    private String add(Jobs job)
    {
        JobsDao jobsDao = new JobsDao();
        Integer iRet = jobsDao.add(job);
        return iRet.toString();
    }
    private String delete(Integer i)
    {
        JobsDao jobsDao = new JobsDao();
        Integer iRet  = jobsDao.delete(i);
        return iRet.toString();
    }
    private String update(Jobs job)
    {
        JobsDao jobsDao = new JobsDao();
        Integer iRet = jobsDao.update(job);
        return iRet.toString();
    }
}
