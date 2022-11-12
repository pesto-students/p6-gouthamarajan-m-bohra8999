const operations = require('./index');
test('Sum equal to', () => {
  expect(operations.sum(12, 5)).toBe(17);
});

test('Difference equal to', () => {
  expect(operations.diff(12, 5)).toBe(7);
});

test('Product equal to', () => {
  expect(operations.product(12, 5)).toBe(60);
});

test('Sum not equal to', () => {
  expect(operations.sum(2, 5)).not.toBe(17);
});

test('Difference not equal to', () => {
  expect(operations.diff(4, 5)).not.toBe(7);
});

test('Product not equal to', () => {
  expect(operations.product(2, 5)).not.toBe(60);
});
