var ChangeColor = function () {
    var count = 0;
    var currentState = new Orange(this);
 
    this.change = function (state) {
        // limits number of changes
        if (count++ >= 10) return;
        currentState = state;
        currentState.go();
    };
 
    this.start = function () {
        currentState.go();
    };
}
 
var Orange = function (light) {
    this.light = light;
 
    this.go = function () {
        log.add("Orange --> I changed to Black");
        light.change(new Black(light));
    }
};
 
var Black = function (light) {
    this.light = light;
 
    this.go = function () {
        log.add("Black --> I changed to Orange");
        light.change(new Orange(light));
    }
};
 
// log helper
 
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log) }
    }
})();
 
function ExecuteThis() {
    var light = new ChangeColor();
    light.start();
 
    log.show();
}

ExecuteThis()