class Dependency {
    constructor(name){
        this.name = name;
    }

    say = function(){
        log.add(`Created dependency ${this.name}`)
    }
}
 
function DependencyFactory() {
 
    this.create = function(name) {
        return new Dependency(name);
    };
}
 
function Injection(name) {
    this.name = name;
 
    this.say = function () {
        log.add(`Created injection ${name}`);
    };
}
 
function InjectionFactory() {
 
    this.create = function(name) {
        return new Injection(name);
    };
}
 
// log helper
var log = (function () {
    var log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log) }
    }
})();
 
function ExecuteThis() {
    var objects = [];
    var dependencyFactory = new DependencyFactory();
    var injectionFactory = new InjectionFactory();
 
    objects.push(dependencyFactory.create("1"));
    objects.push(dependencyFactory.create("2"));
    objects.push(injectionFactory.create("3"));
    objects.push(injectionFactory.create("4"));
 
    for (var i = 0, len = objects.length; i < len; i++) {
        objects[i].say();
    }
 
    log.show();
}

ExecuteThis()