var Shipping = function() {
    this.company = "";
};
 
Shipping.prototype = {
    setStrategy: function(company) {
        this.company = company;
    },
 
    addItem: function(item) {
        return this.company.addItem(item);
    }
};
 
var UPS = function() {
    this.addItem = function(item) {
        // do something...
        return `comprei na loja um ${item}`;
    }
};
 
var USPS = function() {
    this.addItem = function(item) {
        // do something...
        return `comprei na loja um ${item}`;
    }
};
  
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { console.log(log) }
    }
})();
 
function ExecuteThis() { 
     
    var ups = new UPS();
    var usps = new USPS();

    var shop = new Shipping();
 
    shop.setStrategy(ups);
    log.add("Renner: " + shop.addItem("Brinco"));
    shop.setStrategy(usps);
    log.add("Nike: " + shop.addItem("tenis"));
 
    log.show();
}
ExecuteThis()