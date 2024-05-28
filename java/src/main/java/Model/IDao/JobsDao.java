package Model.IDao;

import Model.Jobs;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class JobsDao implements IDao<Jobs, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select job_id, job_name from jobs order by job_id";
    private final String SQL_ADD = "insert into jobs values";
    private final String SQL_DELETE = "delete from jobs where job_id=";
    private final String SQL_UPDATE = "update jobs set ";
    @Override
    public int add(Jobs o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_ADD + "(" +
                    o.getJobID() + ", '" +
                    o.getJobName() + "')";

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
    public int update(Jobs o) {
        int iRet = 0;

        try
        {
            motor.connect();
            String sql = SQL_UPDATE + " job_id=" +
                    o.getJobID() + ", job_name='" +
                    o.getJobName() + "' where job_id=" + o.getCurrentJobID();

            iRet = motor.executeUpdate(sql);
        }
        catch (Exception ex) {iRet = 0;}
        finally {motor.disconnect();}

        return iRet;
    }

    @Override
    public ArrayList<Jobs> findAll(Jobs o)
    {
        ArrayList<Jobs> jobs = new ArrayList<>();

        try
        {
            motor.connect();
            ResultSet rs = motor.executeQuery(SQL_FIND_ALL);

            while (rs.next())
            {
                Jobs job = new Jobs();
                job.setJobID(rs.getInt("job_id"));
                job.setJobName(rs.getString("job_name"));

                jobs.add(job);
            }
        }
        catch (Exception ex) {jobs.clear();}
        finally {motor.disconnect();}


        return jobs;
    }
}
