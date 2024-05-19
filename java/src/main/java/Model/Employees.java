package Model;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;
import java.util.Date;

public class Employees {
    private String _employeeID;
    private String _firstName;
    private String _lastName;
    private String _ssNumber;
    private Date _birthDate;
    private Date _hireDate;
    private float _salary;
    private int _permission;
    private String _password;
    private String _jobID;

    public void setEmployeeID (String employeeID) {_employeeID = employeeID;}
    public void setFirstName (String firstName) {_firstName = firstName;}
    public void setLastName (String lastName) {_lastName = lastName;}
    public void setSsNumber (String ssNumber) {_ssNumber = ssNumber;}
    public void setBirthDate (Date birthDate) {_birthDate = birthDate;}
    public void setHireDate (Date hireDate) {_hireDate = hireDate;}
    public void setSalary (float salary) {_salary = salary;}
    public void setPermission (int permission) {_permission = permission;}
    public void setPassword (String password) {_password = password;}
    public void setJobID (String jobID) {_jobID = jobID;}

    public String getEmployeeID () {return _employeeID;}
    public String getFirstName () {return _firstName;}
    public String getLastName () {return _lastName;}
    public String getSsNumber () {return _ssNumber;}
    public Date getBirthDate () {return _birthDate;}
    public Date getHireDate () {return _hireDate;}
    public float getSalary () {return _salary;}
    public int getPermission () {return _permission;}
    public String getPassword () {return _password;}
    public String getJobID () {return _jobID;}

    public Employees (String employeeID, String firstName, String lastName, String ssNumber, Date birthDate, Date hireDate, float salary, int permission, String password, String jobID) {
        _employeeID = employeeID;
        _firstName = firstName;
        _lastName = lastName;
        _ssNumber = ssNumber;
        _birthDate = birthDate;
        _hireDate = hireDate;
        _salary = salary;
        _permission = permission;
        _password = password;
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
