const hz2py = require('../dist/index');

const test_words = '我爱我家';

test('hz2py with tone', () => {
  expect(hz2py.default(test_words, { tone: true })).toBe('wǒ ài wǒ jiā');
});

test('hz2py without tone', () => {
  expect(hz2py.default(test_words)).toBe('wo ai wo jia');
});

test('hz2py custom delimiter', () => {
  expect(hz2py.default(test_words, { delimiter: '' })).toBe('woaiwojia');
});

test('getInitials properly', () => {
  expect(hz2py.getInitials(test_words).join('')).toBe('wawj');
});

test('hz2py with bad aguments', () => {
  expect(hz2py.default(null, { tone: true })).toBe(null);
});

test('getInitials with bad arguments', () => {
  expect(hz2py.getInitials(null).length).toBe(0);
});

test('tone2Char with bad arguments', () => {
  expect(hz2py.tone2Char('')).toBe('');
});
