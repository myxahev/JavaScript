"use strict";

// es5
function Product_1(name, price) {
    this.name = name;
    this.price = price;
}

Product_1.prototype.make25PercentDiscount_1 = function () {
    this.price = this.price * 0.75;
};

const product1 = new Product_1('Товар 1', 230);
product1.make25PercentDiscount_1();

console.log(product1);

// es6
class Product_2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount_2() {
        this.price = this.price * 0.75;
    }
}

const product2 = new Product('Товар 2', 230);
product2.make25PercentDiscount_2();

console.log(product2);