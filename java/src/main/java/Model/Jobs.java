package Model;

public class Jobs {
    private String _jobID;
    private String _jobName;

    private void setJobID (String jobID) {_jobID = jobID;}
    private void setJobName (String jobName) {_jobName = jobName;}

    public String getJobID () {return _jobID;}
    public String getJobName () {return _jobName;}

    public Jobs (String jobID, String jobName) {
        _jobID = jobID;
        _jobName = jobName;
    }
    public Jobs () {}

}
