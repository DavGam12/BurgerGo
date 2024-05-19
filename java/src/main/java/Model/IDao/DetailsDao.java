package Model.IDao;

import Model.Details;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class DetailsDao implements IDao<Details, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from details";
    @Override
    public int add(Details details) {
        return 0;
    }

    @Override
    public int delete(Integer e) {
        return 0;
    }

    @Override
    public int update(Details details) {
        return 0;
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
                detail.setDetailID(rs.getString("detail_id"));
                detail.setProductQuantity(rs.getInt("product_quantity"));
                detail.setDetailPrice(rs.getFloat("detail_price"));
                detail.setOrderID(rs.getString("order_id"));
                detail.setProductID(rs.getString("product_id"));

                details.add(detail);
            }
        }
        catch (Exception ex) {details.clear();}
        finally {motor.disconnect();}

        return details;
    }
}
