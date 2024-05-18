package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

public class Jobs {
    private String _jobID;
    private String _jobName;

    public void setJobID (String jobID) {_jobID = jobID;}
    public void setJobName (String jobName) {_jobName = jobName;}

    public String getJobID () {return _jobID;}
    public String getJobName () {return _jobName;}

    public Jobs (String jobID, String jobName) {
        _jobID = jobID;
        _jobName = jobName;
    }
    public Jobs () {}

    public static String toArrayJson (ArrayList<Jobs> jobs)
    {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        Gson gson = builder.create();

        return gson.toJson(jobs);
    }

}
