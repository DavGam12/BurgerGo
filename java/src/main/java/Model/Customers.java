package Model;

public class Customers {
    private String _customerID;
    private String _firstName;
    private String _lastName;
    private String _email;
    private String _phoneNumber;
    private String _password;

    private void setCustomerID (String customerID) {_customerID = customerID;}
    private void setFirstName (String firstName) {_firstName = firstName;}
    private void setLastName (String lastName) {_lastName = lastName;}
    private void setEmail (String email) {_email = email;}
    private void setPhoneNumber (String phoneNumber) {_phoneNumber = phoneNumber;}
    private void setPassword (String password) {_password = password;}

    public String getCustomerID () {return _customerID;}
    public String getFirstName () {return _firstName;}
    public String getLastName () {return _lastName;}
    public String getEmail () {return _email;}
    public String getPhoneNumber () {return _phoneNumber;}
    public String getPassword () {return _password;}

    public Customers (String customerID, String firstName, String lastName, String email, String phoneNumber, String password) {
        _customerID = customerID;
        _firstName = firstName;
        _lastName = lastName;
        _email = email;
        _phoneNumber = phoneNumber;
        _password = password;
    }
    public Customers () {}

}
