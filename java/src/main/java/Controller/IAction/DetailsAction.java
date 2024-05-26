package Controller.IAction;

import Model.Details;
import Model.IDao.DetailsDao;
import com.google.gson.Gson;
import com.google.gson.JsonParser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

import static Controller.Controller.getBody;

public class DetailsAction implements IAction {
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
            case "find_specific":
            {
                int product_id = Integer.parseInt(req.getParameter("product_id"));
                int order_id = Integer.parseInt(req.getParameter("order_id"));
                strRet = findSpecific(product_id, order_id);
                break;
            }
            case "find_specific_order":
            {
                int order_id = Integer.parseInt(req.getParameter("order_id"));
                strRet = findSpecificOrder(order_id);
                break;
            }
            case "add":
            {
                Details detail = gson.fromJson(parser.parse(getBody(req)), Details.class);
                strRet = add(detail);
                break;
            }
            case "delete":
            {
                Details detail = gson.fromJson(parser.parse(getBody(req)), Details.class);
                strRet = delete(detail.getDetailID());
                break;
            }
            case "update":
            {
                Details detail = gson.fromJson(parser.parse(getBody(req)), Details.class);
                strRet = update(detail);
                break;
            }
            case "updateSpecific":
            {
                Details detail = gson.fromJson(parser.parse(getBody(req)), Details.class);
                strRet = updateSpecific(detail);
                break;
            }
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
    private String findSpecific(int product_id, int order_id)
    {
        DetailsDao detailsDao = new DetailsDao();
        Details detail = detailsDao.findSpecific(product_id, order_id);
        return Details.toArrayJson(detail);
    }
    private String findSpecificOrder(int order_id)
    {
        DetailsDao detailsDao = new DetailsDao();
        Details detail = detailsDao.findSpecificOrder(order_id);
        return Details.toArrayJson(detail);
    }

    private String add(Details details)
    {
        DetailsDao detailsDao = new DetailsDao();
        int iRes = detailsDao.add(details);
        return String.valueOf(iRes);
    }

    private String delete(Integer i)
    {
        DetailsDao detailsDao = new DetailsDao();
        int iRes = detailsDao.delete(i);
        return String.valueOf(iRes);
    }

    private String update(Details details)
    {
        DetailsDao detailsDao = new DetailsDao();
        int iRes = detailsDao.update(details);
        return String.valueOf(iRes);
    }
    private String updateSpecific(Details details)
    {
        DetailsDao detailsDao = new DetailsDao();
        int iRes = detailsDao.updateSpecific(details);
        return String.valueOf(iRes);
    }
}
