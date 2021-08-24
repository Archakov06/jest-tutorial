const queryStringToObj = require('../functions/queryStringToObj');

test('should queryStringToObj convert to object', () => {
  const obj = queryStringToObj('take=5&query=hello&categories=1,2,5');
  expect(obj).toEqual({ take: 5, query: 'hello', categories: [1, 2, 5] });
});

test('should queryStringToObj convert to object without empty params', () => {
  const obj = queryStringToObj('id=7&query=&user=admin');
  expect(obj).toEqual({ id: 7, user: 'admin' });
});

test('should queryStringToObj convert obj to only numbers', () => {
  const obj = queryStringToObj('id=7&lol=5&kek=888');
  expect(obj).toEqual({ id: 7, lol: 5, kek: 888 });
});
