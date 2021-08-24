const sum = require('../functions/sum');

test('2 + 2 равно 4', () => {
  const result = sum(2, 2);

  expect(result).toBe(4);
  expect(result).not.toBe(5);
});

test('10 + 10 больше 19', () => {
  const result = sum(10, 10);
  expect(result).toBeGreaterThan(19);
});

test('10 + 10 больше или равно 20', () => {
  const result = sum(10, 10);
  expect(result).toBeGreaterThanOrEqual(19);
});

test('5 + 5 меньше 11', () => {
  const result = sum(5, 5);
  expect(result).toBeLessThan(11);
});

test('5 + 10 меньше или равно 15', () => {
  const result = sum(5, 10);
  expect(result).toBeLessThanOrEqual(15);
});
