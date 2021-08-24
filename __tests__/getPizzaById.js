const getPizzaById = require('../functions/getPizzaById');
const pizzas = require('../pizzas.json');

describe('всё отлично', () => {
  test('should getPizzaById return object', () => {
    const obj = getPizzaById(pizzas, 4);

    expect(obj.sizes).not.toEqual([]);
    expect(obj.price).not.toBeGreaterThan(1000);
  });

  test('should getPizzaById return object with property category', () => {
    const obj = getPizzaById(pizzas, 3);

    expect(obj).toHaveProperty('category');
  });

  test('should getPizzaById return object without null or falsy values in sizes', () => {
    const obj = getPizzaById(pizzas, 4);

    expect(obj).toHaveProperty('sizes');
    expect(obj.sizes).not.toContain(null);
    expect(obj.sizes).not.toEqual([]);
  });

  test('should getPizzaById return object required properties', () => {
    const obj = getPizzaById(pizzas, 1);

    expect(obj).toHaveProperty('id');
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('types');
    expect(obj).toHaveProperty('price');
    expect(obj).toHaveProperty('category');
    expect(obj).toHaveProperty('rating');
  });
});

describe('всё плохо', () => {
  test('should getPizzaById return falsy value', () => {
    const obj = getPizzaById(pizzas, 99);

    expect(obj).toBeFalsy();
  });

  test('should getPizzaById return null', () => {
    const obj = getPizzaById(pizzas, 88);

    expect(obj).toBeNull();
  });
});
