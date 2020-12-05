class Observable {
    constructor() {
        this.observers = []
    }

    subscribe(value) {
        this.observers.push(value)
    }

    unsubscribe(value){
        this.observers = this.observers.filter(subscriber => subscriber !== value)
    }

    notify(datas){
        this.observers.forEach(observer => observer(datas))
    }

}

const input = document.querySelector('.input-sub');

const sub1Value = document.querySelector('.p1-value');
const sub2Value = document.querySelector('.p2-value');
const sub3Value = document.querySelector('.p3-value');

const subscribeP1Button = document.querySelector('.subscribe-p1');
const subscribeP2Button = document.querySelector('.subscribe-p2');
const subscribeP3Button = document.querySelector('.subscribe-p3');

const unsubscribeP1Button = document.querySelector('.unsubscribe-p1');
const unsubscribeP2Button = document.querySelector('.unsubscribe-p2');
const unsubscribeP3Button = document.querySelector('.unsubscribe-p3');

const updateP1 = text => sub1Value.textContent = text;
const updateP2 = text => sub2Value.textContent = text;
const updateP3 = text => sub3Value.textContent = text;

const handlersObservers = new Observable();
handlersObservers.subscribe(updateP1);
handlersObservers.subscribe(updateP2);
handlersObservers.subscribe(updateP3);

subscribeP1Button.addEventListener('click', () => handlersObservers.subscribe(updateP1));
unsubscribeP1Button.addEventListener('click', () => handlersObservers.unsubscribe(updateP1));
subscribeP2Button.addEventListener('click', () => handlersObservers.subscribe(updateP2));
unsubscribeP2Button.addEventListener('click', () => handlersObservers.unsubscribe(updateP2));
subscribeP3Button.addEventListener('click', () => handlersObservers.subscribe(updateP3));
unsubscribeP3Button.addEventListener('click', () => handlersObservers.unsubscribe(updateP3));

//event to get value
input.addEventListener('keyup', e => {
  handlersObservers.notify(e.target.value);
});