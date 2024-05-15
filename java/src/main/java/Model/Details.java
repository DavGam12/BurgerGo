package Model;

public class Details {
    private String _detailID;
    private int _productQuantity;
    private float _detailPrice;
    private String _orderID;
    private String _productID;

    private void setDetailID (String detailID) {_detailID = detailID;}
    private void setProductQuantity (int productQuantity) {_productQuantity = productQuantity;}
    private void setDetailPrice (float detailPrice) {_detailPrice = detailPrice;}
    private void setOrderID (String orderID) {_orderID = orderID;}
    private void setProductID (String productID) {_productID = productID;}

    public String getDetailID () {return _detailID;}
    public int getProductQuantity () {return _productQuantity;}
    public float getDetailPrice () {return _detailPrice;}
    public String getOrderID () {return _orderID;}
    public String getProductID () {return _productID;}

    public Details (String detailID, int productQuantity, float detailPrice, String orderID, String productID) {
        _detailID = detailID;
        _productQuantity = productQuantity;
        _detailPrice = detailPrice;
        _orderID = orderID;
        _productID = productID;
    }
    public Details () {}

}
