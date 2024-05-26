package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

public class Employees {
    private int _employeeID, _currentEmployeeID;
    private String _firstName;
    private String _lastName;
    private String _email;
    private String _ssNumber;
    private String _birthDate;
    private String _hireDate;
    private float _salary;
    private int _permission;
    private String _password;
    //private Jobs _job;
    private int _jobID;

    public void setEmployeeID (int employeeID) {_employeeID = employeeID;}
    public void setFirstName (String firstName) {_firstName = firstName;}
    public void setLastName (String lastName) {_lastName = lastName;}
    public void setEmail (String email) {_email = email;}
    public void setSsNumber (String ssNumber) {_ssNumber = ssNumber;}
    public void setBirthDate (String birthDate) {_birthDate = birthDate.replace(" 00:00:00", "");}
    public void setHireDate (String hireDate) {_hireDate = hireDate.replace(" 00:00:00", "");}
    public void setSalary (float salary) {_salary = salary;}
    public void setPermission (int permission) {_permission = permission;}
    public void setPassword (String password) {_password = password;}
    //public void setJob (Jobs job) {_job = job;}
    public void setJobID (int jobID) {_jobID = jobID;}

    public int getCurrentEmployeeID () {return _currentEmployeeID;}
    public int getEmployeeID () {return _employeeID;}
    public String getFirstName () {return _firstName;}
    public String getLastName () {return _lastName;}
    public String getEmail () {return _email;}
    public String getSsNumber () {return _ssNumber;}
    public String getBirthDate () {return _birthDate.replace(" 00:00:00", "");}
    public String getHireDate () {return _hireDate.replace(" 00:00:00", "");}
    public float getSalary () {return _salary;}
    public int getPermission () {return _permission;}
    public String getPassword () {return _password;}
    //public Jobs getJob () {return _job;}
    public int getJobID () {return _jobID;}

    public Employees (int employeeID, String firstName, String lastName, String email, String ssNumber, String birthDate, String hireDate, float salary, int permission, String password, /*Jobs job,*/ int jobID) {
        _employeeID = employeeID;
        _firstName = firstName;
        _lastName = lastName;
        _email = email;
        _ssNumber = ssNumber;
        _birthDate = birthDate;
        _hireDate = hireDate;
        _salary = salary;
        _permission = permission;
        _password = password;
        //_job = job;
        _jobID = jobID;
    }
    public Employees () {}

    public static String toArrayJson(ArrayList<Employees> employees) {
        GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();

        Gson gson = builder.create();

        return gson.toJson(employees);
    }

}
