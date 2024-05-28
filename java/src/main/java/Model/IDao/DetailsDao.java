package Model.IDao;

import Model.Details;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class DetailsDao implements IDao<Details, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select detail_id, product_quantity, detail_price, order_id, product_id from details order by detail_id";
    private final String SQL_FIND_SPECIFIC = "select detail_id, product_quantity, detail_price, order_id, product_id from details where product_id=";
    private final String SQL_FIND_SPECIFIC_ORDER = "select detail_id, product_quantity, detail_price, order_id, product_id from details where order_id=";
    private final String SQL_ADD = "insert into details (product_quantity, detail_price, order_id, product_id) values";
    private final String SQL_DELETE = "delete from details where detail_id=";
    private final String SQL_UPDATE = "update details set ";
    @Override
    public int add(Details o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_ADD + "( " +
                    o.getProductQuantity() + ", " +
                    o.getDetailPrice() + ", " +
                    o.getOrderID() + ", " +
                    o.getProductID() + ")";

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}
        return iRet;
    }

    @Override
    public int delete(Integer i) {
        int iRet = 0;

        try
        {
            motor.connect();
            iRet = motor.executeUpdate(SQL_DELETE+i);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
    }

    @Override
    public int update(Details o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_UPDATE + "detail_id=" +
                    o.getDetailID() + ", product_quantity=" +
                    o.getProductQuantity() + ", detail_price=" +
                    o.getDetailPrice() + ", order_id=" +
                    o.getOrderID() + ", product_id=" +
                    o.getProductID() + " where detail_id=" + o.getDetailID();

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}
        return iRet;
    }

    @Override
    public ArrayList<Details> findAll(Details o)
    {
        ArrayList<Details> details = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Details detail = new Details();
                detail.setDetailID(rs.getInt("detail_id"));
                detail.setProductQuantity(rs.getInt("product_quantity"));
                detail.setDetailPrice(rs.getFloat("detail_price"));
                detail.setOrderID(rs.getInt("order_id"));
                detail.setProductID(rs.getInt("product_id"));

                details.add(detail);
            }
        }
        catch (Exception ex) {details.clear();}
        finally {motor.disconnect();}

        return details;
    }

    public Details findSpecific(int product_id, int order_id)
    {
        Details detail = new Details();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_SPECIFIC+product_id+" and order_id="+order_id);

            while (rs.next())
            {
                detail.setDetailID(rs.getInt("detail_id"));
                detail.setProductQuantity(rs.getInt("product_quantity"));
                detail.setDetailPrice(rs.getFloat("detail_price"));
                detail.setOrderID(rs.getInt("order_id"));
                detail.setProductID(rs.getInt("product_id"));

            }
        }
        catch (Exception ex) {detail=null;}
        finally {motor.disconnect();}

        return detail;
    }

    public ArrayList<Details> findSpecificOrder(int order_id)
    {
        ArrayList<Details> details = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_SPECIFIC_ORDER+order_id);

            while (rs.next())
            {
                Details detail = new Details();
                detail.setDetailID(rs.getInt("detail_id"));
                detail.setProductQuantity(rs.getInt("product_quantity"));
                detail.setDetailPrice(rs.getFloat("detail_price"));
                detail.setOrderID(rs.getInt("order_id"));
                detail.setProductID(rs.getInt("product_id"));

                details.add(detail);
            }
        }
        catch (Exception ex) {details.clear();}
        finally {motor.disconnect();}

        return details;
    }
}
