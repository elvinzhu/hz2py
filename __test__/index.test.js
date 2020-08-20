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

test('hz2py/tone2Char/getInitials with bad aguments', () => {
  expect(hz2py(null, { tone: true })).toBe(null);
  expect(tone2Char('')).toBe('');
  expect(getInitials(null).length).toBe(0);
});

test('hz2py with not pinyin', () => {
  const words = 'asdf(';
  expect(hz2py(words)).toBe(words);
});

test('hz2py/getInitials with not string', () => {
  const words = 2345;
  expect(hz2py(words)).toBe(words);
  expect(getInitials(words).length).toBe(0);
});

test('getInitials/tone2Char work properly', () => {
  expect(getInitials(test_words).join('')).toBe('wawj');
  expect(tone2Char('wǒ ài wǒ jiā')).toBe('wo ai wo jia');
});
