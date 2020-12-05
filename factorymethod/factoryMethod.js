class Factory {
    constructor() {

    }

    AdoptAnimal = function (value) {
        var animal;

        if (value === "cat") {
            animal = new Cat();
        } else if (value === "dog") {
            animal = new Dog();
        }

        animal.type = value;
        animal.say = function () {
            log.add(`Type: ${animal.type}, text: ${animal.adopt}`);
        }
        return animal;
    }
}

var Cat = function () {
    this.adopt = "Adopted an cat";
};

var Dog = function () {
    this.adopt = "Adopted an dog";
};

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log) }
    }
})();

function ExecuteThis() {
    var animals = [];
    var factory = new Factory();

    animals.push(factory.AdoptAnimal("dog"));
    animals.push(factory.AdoptAnimal("cat"));

    for (var i = 0, len = animals.length; i < len; i++) {
        animals[i].say();
    }

    log.show();
}

ExecuteThis()