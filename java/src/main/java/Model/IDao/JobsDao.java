package Model.IDao;

import Model.Jobs;
import Model.SQLMotor;

import java.sql.ResultSet;
import java.util.ArrayList;

public class JobsDao implements IDao<Jobs, Integer> {
    private final SQLMotor motor = new SQLMotor();
    private final String SQL_FIND_ALL = "select * from jobs";
    @Override
    public int add(Jobs o) {
        return 0;
    }

    @Override
    public int delete(Integer e) {
        return 0;
    }

    @Override
    public int update(Jobs o) {
        return 0;
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
                job.setJobID(rs.getString("job_id"));
                job.setJobName(rs.getString("job_name"));

                jobs.add(job);
            }
        }
        catch (Exception ex) {jobs.clear();}
        finally {motor.disconnect();}


        return jobs;
    }
}
