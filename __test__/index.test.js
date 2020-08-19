const hz2py = require('../dist/index');

const test_words = '我爱我家';

test('transform to with tone', () => {
  expect(hz2py.default(test_words, { tone: true })).toBe('wǒ ài wǒ jiā');
});

test('transform to without tone', () => {
  expect(hz2py.default(test_words)).toBe('wo ai wo jia');
});

test('get initials properly', () => {
  expect(hz2py.getInitials(test_words).join('')).toBe('wawj');
});
