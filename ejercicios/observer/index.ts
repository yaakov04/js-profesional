interface Observer {
    update: (data: any) => void
}

interface Subject {
    subscribe: (observer: Observer) => void;
    unsubscribe: (observer: Observer) => void;
}

class Price implements Subject {
    observers: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.querySelector('#value');
        el.addEventListener('input', ()=>{
            this.notify(el.value)
        });
    }

    subscribe (observer: Observer){
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer){
        const index = this.observers.findIndex(obs =>{
            return obs === observer
        });

        this.observers.splice(index, 1);
    }

    notify(data: any){
        this.observers.forEach(obs => obs.update(data))
    }
}

class PriceDisplay implements Observer{
    private el:HTMLElement;
    constructor(){
        this.el=document.querySelector('#precio');
    }
    update (data: any){
this.el.innerText = data;
    };
}

const value = new Price();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(
    ()=>{value.unsubscribe(display)},
    5000
)

