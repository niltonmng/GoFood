import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FoodsInMemoryDataService implements InMemoryDbService {
  createDb() {
    const foods = [
      {
        id: 1,
        title: 'Buffalo Chicken Salad',
        price: 7.50,
        cuisine: 'salad'
    },
    {
        id: 2,
        title: 'Cheese',
        price: 12.95,
        cuisine: 'pizza'
    },
    {
        id: 3,
        title: 'Teriyaki Chicken',
        price: 11.95,
        cuisine: 'chinese'
    },
    {
        id: 4,
        title: 'Pepperoni',
        price: 13.50,
        cuisine: 'pizza'
    },
    {
        id: 5,
        title: 'Hot Expresso',
        price: 4.25,
        cuisine: 'beverage'
    },
    {
        id: 6,
        title: 'Classic Beef',
        price: 9.50,
        cuisine: 'burgers'
    },
    {
        id: 7,
        title: 'Caesar',
        price: 12.95,
        cuisine: 'salad'
    },
    {
        id: 8,
        title: 'BBQ Chicken',
        price: 5.50,
        cuisine: 'pizza'
    },
    {
        id: 9,
        title: 'Hawaiian pizza',
        price: 9.50,
        cuisine: 'pizza'
    },
    {
        id: 10,
        title: 'Canned Soda',
        price: 4.50,
        cuisine: 'beverage'
    },
    {
        id: 11,
        title: 'General Tso Chicken',
        price: 10.50,
        cuisine: 'chinese'
    },
    {
        id: 12,
        title: '2 Liter Soda',
        price: 6.25,
        cuisine: 'beverage'
    },
    {
        id: 13,
        title: 'Bacon Cheese',
        price: 6.95,
        cuisine: 'burgers'
    },
    {
        id: 14,
        title: 'Orange Chicken',
        price: 10.25,
        cuisine: 'chinese'
    },
    {
        id: 15,
        title: 'Roast Pork Chow Mein',
        price: 7.95,
        cuisine: 'chinese'
    },
    {
        id: 16,
        title: 'Chai Latte',
        price: 13.50,
        cuisine: 'beverage'
    },
    {
        id: 17,
        title: 'Big Mini',
        price: 7.95,
        cuisine: 'burgers'
    },
    {
        id: 18,
        title: 'Steak & Fries',
        price: 10.25,
        cuisine: 'burgers'
    },
    {
        id: 19,
        title: 'Turkey Club',
        price: 8.25,
        cuisine: 'burgers'
    },
    {
        id: 20,
        title: 'Iced Tea',
        price: 5.25,
        cuisine: 'beverage'
    },
    {
        id: 21,
        title: 'Grilled Chicken Salad',
        price: 7.50,
        cuisine: 'salad'
    },
    {
        id: 22,
        title: 'Seafood Lo Mein',
        price: 11.25,
        cuisine: 'chinese'
    },
    {
        id: 23,
        title: 'Club Salad',
        price: 9.25,
        cuisine: 'salad'
    },
    {
        id: 24,
        title: 'Small Chow Fun',
        price: 4.50,
        cuisine: 'chinese'
    },
    {
        id: 25,
        title: 'Sweet & Sour Chicken',
        price: 11.95,
        cuisine: 'chinese'
    }
    ];
    return {foods};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(foods: Food[]): number {
    return foods.length > 0 ? Math.max(...foods.map(food => food.id)) + 1 : 11;
  }
}