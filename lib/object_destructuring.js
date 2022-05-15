"use strict";
const restaurantObject = {
    restaurantName: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    startMenu: ['Focacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        },
    },
};
const { restaurantName, openingHours, categories } = restaurantObject;
console.log(restaurantName, openingHours, categories);
// Alias
const { restaurantName: title, openingHours: hours, categories: tags } = restaurantObject;
console.log(title, hours, tags);
// Default Values
const { menu = [], startMenu = [] } = restaurantObject;
console.log(menu, startMenu);
