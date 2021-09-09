"use strict";

// es5
function Coffee(coffeeBean, water) {
    this.coffeeBean = coffeeBean;
    this.water = water;
}

Coffee.prototype.makingСoffee = function (CupOfHotCoffee) {
    alert(CupOfHotCoffee);
};

Coffee.prototype.show_info = function () {
    alert(this.coffeeBean + ' ' + this.water + ' ' + this.milk);
};

function Cappuccino(coffeeBean, water, milk) {
    Coffee.call(this, coffeeBean, water);
    this.milk = milk;
}

Cappuccino.prototype = Object.create(Coffee.prototype);
Cappuccino.prototype.constructor = Cappuccino;

Cappuccino.prototype.makingСoffeeWithCinnamon = function (CupOfHotCoffeeWithCinnamon) {
    alert(CupOfHotCoffeeWithCinnamon);
};

let cupOfCoffee = new Cappuccino('Arabica', 'clean water', 'oat milk');
cupOfCoffee.makingСoffee('one cup of coffee please');
cupOfCoffee.makingСoffeeWithCinnamon('one cup of coffee please with cinnamon');
cupOfCoffee.show_info();

//es6
class Coffee {
    constructor(coffeeBean, water) {
        this.coffeeBean = coffeeBean;
        this.water = water;
    }

    makingСoffee(CupOfHotCoffee) {
        alert(CupOfHotCoffee);
    }
    show_info() {
        alert(this.coffeeBean + ' ' + this.water + ' ' + this.milk);
    }
}

class Cappuccino extends Coffee {
    constructor(coffeeBean, water, milk) {
        super(coffeeBean, water);
        this.milk = milk;
    }

    makingСoffeeWithCinnamon(CupOfHotCoffeeWithCinnamon) {
        alert(CupOfHotCoffeeWithCinnamon);
    }
}

let cupOfCoffee = new Cappuccino('Arabica', 'clean water', 'oat milk');
cupOfCoffee.makingСoffee('one cup of coffee please');
cupOfCoffee.makingСoffeeWithCinnamon('one cup of coffee please with cinnamon');
cupOfCoffee.show_info();