import hz2py, { getInitials, tone2Char, hasStringValue } from '../index.ts';

const normal_letters = 'abCd';
const test_words = '我爱我家';
const num_arg = 12345;
const exception = '乥';

test('hasStringValue work properly', () => {
  expect(hasStringValue(normal_letters)).toBe(true);
  expect(hasStringValue(num_arg)).toBe(false);
  expect(hasStringValue('')).toBe(false);
  expect(hasStringValue(null)).toBe(false);
  expect(hasStringValue()).toBe(false);
  expect(hasStringValue(true)).toBe(false);
});

test('tone2Char works properly', () => {
  // default
  expect(tone2Char('wǒ ài wǒ jiā')).toBe('wo ai wo jia');
  expect(tone2Char(normal_letters)).toBe(normal_letters);
  // bad arguments
  expect(tone2Char('')).toBe('');
  expect(tone2Char(null)).toBe(null);
});

test('hz2py works properly', () => {
  // defalut (without tone)
  expect(hz2py(test_words)).toBe('wo ai wo jia');
  // bad arguments
  expect(hz2py(null)).toBe(null);
  expect(hz2py(num_arg)).toBe(num_arg);
  // with tone
  expect(hz2py(test_words, { tone: true })).toBe('wǒ ài wǒ jiā');
  // custome delimeter
  expect(hz2py(test_words, { delimiter: ',' })).toBe('wo,ai,wo,jia');
  // character that in the checklist
  expect(hz2py(exception)).toBe(exception);
});

test('getInitials works properly', () => {
  // default
  expect(getInitials(test_words).join('')).toBe('wawj');
  // bad arguments
  expect(getInitials(null).length).toBe(0);
  expect(getInitials(num_arg).length).toBe(0);
  // contains whitespace
  expect(getInitials('我   爱w j')).toEqual(['w', ' ', ' ', ' ', 'a', 'w', ' ', 'j']);
});
