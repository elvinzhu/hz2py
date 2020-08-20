import hz2py, { getInitials, tone2Char } from '../index.ts';

const test_words = '我爱我家';

test('hz2py with tone', () => {
  expect(hz2py(test_words, { tone: true })).toBe('wǒ ài wǒ jiā');
});

test('hz2py without tone', () => {
  expect(hz2py(test_words)).toBe('wo ai wo jia');
});

test('hz2py custom delimiter', () => {
  expect(hz2py(test_words, { delimiter: '' })).toBe('woaiwojia');
});

test('hz2py with bad aguments', () => {
  expect(hz2py(null, { tone: true })).toBe(null);
});

test('getInitials properly', () => {
  expect(getInitials(test_words).join('')).toBe('wawj');
});

test('getInitials with bad arguments', () => {
  expect(getInitials(null).length).toBe(0);
});

test('tone2Char with bad arguments', () => {
  expect(tone2Char('')).toBe('');
});
