class Newsletter {
    constructor(titulo, texto) {
        this.titulo = titulo
        this.texto = texto
    }

    done = function () {
        var memento = JSON.stringify(this);
        return memento;
    }

    redone = function (memento) {
        var m = JSON.parse(memento);
        this.texto = m.texto;
        this.titulo = m.titulo;
    }
}

class CareTaker {
    constructor() {
        this.mementos = {};
    }

    add = function (key, memento) {
        this.mementos[key] = memento;
    }

    get = function (key) {
        return this.mementos[key];
    }
}

function ExecuteThis() {
    var news1 = new Newsletter("Spider-Man 3 is coming son", "There many spiders this movie, SpiderVerse!!");
    var caretaker = new CareTaker();

    // save state

    caretaker.add(1, news1.done());

    // change title

    news1.titulo = "Spider-Man 3 canceled!!";

    // restore original state

    news1.redone(caretaker.get(1));

    console.log(news1)

}
ExecuteThis()