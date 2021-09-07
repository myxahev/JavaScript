"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photo: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photo: []
    },
    {
        id: 10,
        price: 26,
        photo: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// Создание массива продуктов с фото
const productsPhoto = products.filter(i => 'photo' in i && i.photo.length > 0);
console.log(productsPhoto);

// Создание массива по возрастанию цены
const productsSortedLowPrice = products.sort(function (x, y) {
    return x.price - y.price;
});
console.log(productsSortedLowPrice);